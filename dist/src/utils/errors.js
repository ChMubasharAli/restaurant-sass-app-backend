export class AppError extends Error {
    statusCode;
    message;
    isOperational;
    constructor(statusCode, message, isOperational = true) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.isOperational = isOperational;
        Object.setPrototypeOf(this, AppError.prototype);
    }
}
export class NotFoundError extends AppError {
    constructor(message = "Resource not found") {
        super(404, message);
    }
}
export class ValidationError extends AppError {
    constructor(message = "Validation failed") {
        super(400, message);
    }
}
export class ConflictError extends AppError {
    constructor(message = "Resource already exists") {
        super(409, message);
    }
}
export class UnauthorizedError extends AppError {
    constructor(message = "Unauthorized") {
        super(401, message);
    }
}
//# sourceMappingURL=errors.js.map