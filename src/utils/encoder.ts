import forge from "node-forge";

// Public RSA Key provided by the backend
const PUBLIC_KEY = `-----BEGIN RSA PUBLIC KEY-----
MIIBCgKCAQEAu86BbUb6miEV+XR+AEIi99hKdKQ2FXt0+A0qDTjP3HmbSTilwbDI
n1QWLwjz0LlHivubVvCxaSO/lEQFMhEL7uqheZkZebphCZxXxKI9xn1E+aktnxgy
L8wC+bBRcSvwuGKbb2bD+Y2Z6NNAukn4c5gSTKiVlOZVHF8LiDZ+dZizGcvipwdw
JRDUaDYbVS70doqRtwbaQsPH+OtLvAE19RUW3B2SReJMcnRdrIBAHeDAEMG+LHjR
ZtQw5yBl5Kkg4CiYU/SNYSvnXT3iJK1D1vGLMxVJiuRUujkJ2FTK3CDLi2BaambE
yjOzYWJ5q8rwuKAHtM6PxV8ZHGVaC8TfOQIDAQAB
-----END RSA PUBLIC KEY-----`;

/**
 * Converts a PKCS#1 PEM-formatted public key to PKCS#8 PEM format.
 * @param pem The PKCS#1 PEM-formatted public key.
 * @returns The PKCS#8 PEM-formatted public key.
 */
function convertPKCSOnetoEight(pem: string): string {
  const key = forge.pki.publicKeyFromPem(pem);
  return forge.pki.publicKeyToPem(key);
}

/**
 * Converts a PEM-formatted public key into an ArrayBuffer for use with Web Crypto API.
 * @param pem The PEM-formatted public key.
 * @returns An ArrayBuffer containing the binary representation of the key.
 */
function pemToArray(pem: string): ArrayBuffer {
  const b64Lines = pem.split("\n").filter((line) => !line.includes("-----"));
  const b64 = b64Lines.join("");
  const binaryString = window.atob(b64);
  const binaryLen = binaryString.length;
  const bytes = new Uint8Array(binaryLen);
  for (let i = 0; i < binaryLen; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

/**
 * Encrypts data using RSA-OAEP with SHA-256 and the provided public key.
 * @param data The string data to encrypt.
 * @returns A promise that resolves to the base64-encoded encrypted data.
 */
export async function encryptData(data: string): Promise<string> {
  if (!data) {
    throw new Error("No data provided for encryption");
  }

  const encoder = new TextEncoder();
  const encodedData = encoder.encode(data); // Encode data to Uint8Array

  try {
    const publicKeyPem = convertPKCSOnetoEight(PUBLIC_KEY); // Convert PKCS#1 to PKCS#8
    const publicKeyBuffer = pemToArray(publicKeyPem); // Convert PEM to ArrayBuffer

    const cryptoKey = await crypto.subtle.importKey(
      "spki", // Format
      publicKeyBuffer,
      { name: "RSA-OAEP", hash: "SHA-256" },
      true,
      ["encrypt"],
    );

    const encryptedData = await crypto.subtle.encrypt(
      { name: "RSA-OAEP" },
      cryptoKey,
      encodedData,
    );

    // Base64 encode the encrypted data
    return btoa(String.fromCharCode(...new Uint8Array(encryptedData)));
  } catch (error) {
    console.error("Encryption error:", error);
    throw new Error("Failed to encrypt data");
  }
}

/**
 * Encodes email and password into a secure encrypted format for headers.
 * @param email The user's email address.
 * @param password The user's password.
 * @returns A promise that resolves to the encrypted credentials.
 */
export async function encodeSecureCredentials(
  email: string,
  password: string,
): Promise<string> {
  const credentials = `${email}:${password}`;
  try {
    const encryptedCredentials = await encryptData(credentials);
    return `Encrypted ${encryptedCredentials}`;
  } catch (error) {
    console.error("Error encoding secure credentials:", error);
    throw new Error("Failed to encode secure credentials");
  }
}
