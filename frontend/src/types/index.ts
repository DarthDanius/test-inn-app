
export type ErrorApp = {
    message: string,
    title?: string,
}

export function isErrorApp(error: unknown): error is ErrorApp {
    if (error && typeof error === 'object' && 'message' in error) {
        return true;
    }
    return false;
}

export type ErrorResponse = {
    message: string;
    errors?: any[],
}

export function isErrorResponse(data: unknown): data is ErrorResponse {
    const isErrorResponse = !!(
        typeof data === 'object' && data &&
        'message' in data
    )

    return isErrorResponse
}