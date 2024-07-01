package user_service

import (
	"igclone/data/request"
	"igclone/models"
)

type UserService interface {
	GetUsers() ([]models.TempUser, error)
	GetUserByID(uint) (*models.TempUser, error)
	GetUserByUsername(string) (*models.TempUser, error)
	CreateUser(request.CreateUserRequest) (*models.TempUser, error)
	Login(request.LoginRequest) (*models.TempUser, error)
}
