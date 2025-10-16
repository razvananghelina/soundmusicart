<?php
/**
 * JWT Helper Class
 * Simple JWT implementation for authentication
 */

class JWT {
    private static string $secret_key = "your-secret-key-change-this-in-production";
    private static string $algorithm = 'HS256';

    /**
     * Encode JWT token
     */
    public static function encode(array $payload, int $expiration = 86400): string {
        $header = [
            'typ' => 'JWT',
            'alg' => self::$algorithm
        ];

        $payload['iat'] = time();
        $payload['exp'] = time() + $expiration;

        $base64UrlHeader = self::base64UrlEncode(json_encode($header));
        $base64UrlPayload = self::base64UrlEncode(json_encode($payload));

        $signature = hash_hmac(
            'sha256',
            $base64UrlHeader . "." . $base64UrlPayload,
            self::$secret_key,
            true
        );

        $base64UrlSignature = self::base64UrlEncode($signature);

        return $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;
    }

    /**
     * Decode JWT token
     */
    public static function decode(string $token): ?array {
        try {
            $tokenParts = explode('.', $token);

            if (count($tokenParts) !== 3) {
                return null;
            }

            [$base64UrlHeader, $base64UrlPayload, $base64UrlSignature] = $tokenParts;

            $signature = hash_hmac(
                'sha256',
                $base64UrlHeader . "." . $base64UrlPayload,
                self::$secret_key,
                true
            );

            $base64UrlSignatureCheck = self::base64UrlEncode($signature);

            if ($base64UrlSignature !== $base64UrlSignatureCheck) {
                return null;
            }

            $payload = json_decode(self::base64UrlDecode($base64UrlPayload), true);

            if (!isset($payload['exp']) || $payload['exp'] < time()) {
                return null;
            }

            return $payload;
        } catch (Exception $e) {
            return null;
        }
    }

    /**
     * Get token from authorization header
     */
    public static function getBearerToken(): ?string {
        $headers = getallheaders();

        if (isset($headers['Authorization'])) {
            $matches = [];
            if (preg_match('/Bearer\s+(.*)$/i', $headers['Authorization'], $matches)) {
                return $matches[1];
            }
        }

        return null;
    }

    /**
     * Verify and get payload from request
     */
    public static function verify(): ?array {
        $token = self::getBearerToken();

        if (!$token) {
            return null;
        }

        return self::decode($token);
    }

    private static function base64UrlEncode(string $data): string {
        return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
    }

    private static function base64UrlDecode(string $data): string {
        return base64_decode(strtr($data, '-_', '+/'));
    }
}
