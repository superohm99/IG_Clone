package notesrv

import (
	"igclone/data/request"
	"igclone/data/response"
	"igclone/models"
)

type NoteService interface {
	GetNoteByID(uint) (*response.NoteResponse, error)
	GetNoteByIDV2(uint) (*models.Note, error)
	GetLatestNotes(uint) ([]response.NoteResponse, error)
	GetLatestNoteByUserID(uint) (*response.NoteResponse, error)
	CreateNote(request.CreateNoteRequest, uint) (*response.NoteResponse, error)
	DeleteNoteByID(uint, uint) error
}