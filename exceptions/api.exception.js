module.exports = class ApiError extends Error {
    status
    errors

    constructor(status, message, errors=[]) {
        super(message)
        this.status = status
        this.errors = errors
    }

    static UnauthorizeError() {
        return new ApiError(401, 'Пользователь не авторизован.')
    }

    static PermissionDenied(message='') {
        return new ApiError(403, 'В доступе отказано. ' + message)
    }

    static BadRequest(message, errors) {
        return new ApiError(400, message, errors)
    }
}