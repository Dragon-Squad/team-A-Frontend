export const httpRequest = async (
    url: string,
    method: string = "get",
    headers: Headers,
    body?: string | FormData,
): Promise<Response> => {
    try {
        const response = await fetch(url, {
            method: method,
            headers: headers,
            body: body,
            credentials: "include",
        });

        return response;
    } catch (err) {
        const message = err instanceof Error ? err.message : "An unexpected error occurred ";
        throw new Error(message);
    }
};
