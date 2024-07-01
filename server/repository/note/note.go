package noterepo

import "igclone/models"

type NoteRepository interface {
	FindByID(uint) (*models.Note, error)
	FindByUserID(uint) (*models.Note, error)
	FindByUsername(string) (*models.Note, error)
	FindAll() ([]models.Note, error)
	Save(models.Note) (*models.Note, error)
	Delete(uint, uint) error
}