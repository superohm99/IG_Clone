package utils

import (
	"github.com/go-playground/validator/v10"
)

func NewValidator() *validator.Validate {
	validate := validator.New()
	return validate
}

var validationErrors = map[string]string{
	"Test.Username": "The Username field must be lowercase",
	"Test.Password": "Password must be at least 8 characters long",
}

func TranslateError(err error) string {
	// for _, err := range err.(validator.ValidationErrors) {
	// 	if msg, ok := validationErrors[err.Namespace()]; ok {
	// 		return msg
	// 	}
	// }
	return err.Error()
}
