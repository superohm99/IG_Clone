package errs

import "net/http"

type AppError struct {
	Code    int
	Message string
}

func (e AppError) Error() string {
	return e.Message
}

func NewNotFoundError(message string) error {
	return &AppError{
		Code: http.StatusNotFound,
		Message: message,
	}
}

func NewUnexpectedError() error {
	return &AppError{
		Code: http.StatusInternalServerError,
		Message: "An unexpected error occurred",
	}
}

func NewUnauthorizedError(message string) error {
	return &AppError{
		Code: http.StatusUnauthorized,
		Message: message,
	}
}

func NewForbiddenError(message string) error {
	return &AppError{
		Code: http.StatusForbidden,
		Message: message,
	}
}

func NewBadRequestError(message string) error {
	return &AppError{
		Code: http.StatusBadRequest,
		Message: message,
	}
}

func NewInternalServerError(message string) error {
	return &AppError{
		Code: http.StatusInternalServerError,
		Message: message,
	}
}