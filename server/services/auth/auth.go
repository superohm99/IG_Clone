package authsrv

import (
	"igclone/data/request"
	"igclone/data/response"
)

type AuthService interface {
	Login(request.LoginRequest) (*response.AuthResponse, error)
	Register(request.CreateUserRequest) (*response.AuthResponse, error)
}