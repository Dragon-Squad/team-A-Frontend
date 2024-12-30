/**
 * Encodes a given string into Base64 format.
 * @param input - The string to encode.
 * @returns The Base64-encoded string.
 */
export function encodeToBase64(input: string): string {
  return btoa(input);
}

/**
 * Decodes a Base64-encoded string.
 * @param input - The Base64 string to decode.
 * @returns The decoded string.
 */
export function decodeFromBase64(input: string): string {
  return atob(input);
}
