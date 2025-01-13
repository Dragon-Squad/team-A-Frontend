/**
 * Set an item in localStorage with JSON stringification
 * @param key - The key to store the value under
 * @param value - The value to store, inferred type
 */
export const setLocalStorageItem = <T>(key: string, value: T): void => {
  try {
    const serializedValue =
      typeof value === "string" ? value : JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error(
      `Failed to set item in localStorage for key "${key}": ${error}`,
    );
  }
};

/**
 * Get an item from localStorage with JSON parsing, handles plain strings gracefully
 * @param key - The key to retrieve the value for
 * @returns The parsed value, or null if not found
 */
export const getLocalStorageItem = <T>(key: string): T | null => {
  try {
    const serializedValue = localStorage.getItem(key);
    if (!serializedValue) {
      return null;
    }

    // Check if the value is JSON-parseable
    try {
      return JSON.parse(serializedValue) as T;
    } catch {
      // If parsing fails, return the raw string as a fallback
      return serializedValue as unknown as T;
    }
  } catch (error) {
    console.error(
      `Failed to get item from localStorage for key "${key}": ${error}`,
    );
    return null;
  }
};

/**
 * Remove an item from localStorage
 * @param key - The key to remove
 */
export const removeLocalStorageItem = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(
      `Failed to remove item from localStorage for key "${key}": ${error}`,
    );
  }
};
