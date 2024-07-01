package user_repository

import "igclone/models"

type UserRepository interface {
	FindAll() ([]models.TempUser, error)
	FindByID(uint) (*models.TempUser, error)
	FindByUsername(string) (*models.TempUser, error)
	Save(models.TempUser) (*models.TempUser, error)
}