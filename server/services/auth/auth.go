package auth

import (
	"igclone/data/request"
	"igclone/data/response"
)

type AuthService interface {
	Login(request.LoginRequest) (*response.AuthResponse, error)
	Register(request.CreateUserRequest) (*response.AuthResponse, error)
	Logout(userID uint) error
	hashAndSalt(password []byte) *string
	comparePasswords(hashedPwd string, plainPwd []byte) bool
}
