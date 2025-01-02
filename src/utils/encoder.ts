export const encodeCredentials = (email: string, password: string): string => {
  const credentials = `${email}:${password}`;
  const encoded = btoa(credentials);
  console.log(encoded);
  return `Basic ${encoded}`;
};
