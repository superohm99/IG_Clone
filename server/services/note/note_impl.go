package notesrv

import (
	"igclone/data/request"
	"igclone/data/response"
	"igclone/errs"
	"igclone/logs"
	"igclone/models"
	noterepo "igclone/repository/note"
	usersrv "igclone/services/user"
	"time"
)

type noteServiceImpl struct {
	noteRepo noterepo.NoteRepository
	userSrv  usersrv.UserService
}

func NewNoteService(noteRepo noterepo.NoteRepository, userSrv usersrv.UserService) NoteService {
	return &noteServiceImpl{
		noteRepo: noteRepo,
		userSrv:  userSrv,
	}
}

func (s *noteServiceImpl) GetNoteByID(noteID uint) (*response.NoteResponse, error) {
	note, err := s.noteRepo.FindByID(noteID)
	if err != nil {
		logs.Error(err)
		return nil, errs.NewNotFoundError("Note not found")
	}

	noteResponse := &response.NoteResponse{
		ID:        note.ID,
		Text:      note.Text,
		CreatedAt: note.CreatedAt,
		User:      note.User,
	}

	return noteResponse, nil
}

func (s *noteServiceImpl) GetNoteByIDV2(noteID uint) (*models.Note, error) {
	note, err := s.noteRepo.FindByID(noteID)
	if err != nil {
		logs.Error(err)
		return nil, errs.NewNotFoundError("Note not found")
	}

	return note, nil
}

func (s *noteServiceImpl) GetLatestNotes(userID uint) ([]response.NoteResponse, error) {
	notes, err := s.noteRepo.FindAll()
	if err != nil {
		logs.Error(err)
		return nil, errs.NewUnexpectedError()
	}

	userNote := models.Note{}

	for i, v := range notes {
		if v.UserID == userID {
			userNote = v
			notes = append(notes[:i], notes[i+1:]...)
			break
		}
	}

	if userNote.ID == 0 {
		user, err := s.userSrv.GetUserByID(userID)
		if err != nil {
			logs.Error(err)
			return nil, errs.NewNotFoundError("User not found")
		}
		userNote.User = *user
	}

	notes = append([]models.Note{userNote}, notes...)

	notesResponse := []response.NoteResponse{}
	for _, v := range notes {
		noteResponse := response.NoteResponse{
			ID:        v.ID,
			Text:      v.Text,
			CreatedAt: v.CreatedAt,
			User:      v.User,
		}
		notesResponse = append(notesResponse, noteResponse)
	}

	return notesResponse, nil
}
func (s *noteServiceImpl) GetLatestNoteByUserID(userID uint) (*response.NoteResponse, error) {
	note, err := s.noteRepo.FindByUserID(userID)
	if err != nil {
		logs.Error(err)
		return nil, errs.NewNotFoundError("Note not found")
	}

	noteResponse := &response.NoteResponse{
		ID:        note.ID,
		Text:      note.Text,
		CreatedAt: note.CreatedAt,
		User:      note.User,
	}
	return noteResponse, nil
}
func (s *noteServiceImpl) CreateNote(note request.CreateNoteRequest, userID uint) (*response.NoteResponse, error) {

	_, err := s.userSrv.GetUserByID(userID)
	if err != nil {
		logs.Error(err)
		return nil, errs.NewNotFoundError("User not found")
	}

	newNote := models.Note{
		Text:      note.Text,
		CreatedAt: time.Now().Format("2006-01-02 15:04:05"),
		UserID:    userID,
	}

	noteCreated, err := s.noteRepo.Save(newNote)
	if err != nil {
		logs.Error(err)
		return nil, errs.NewUnexpectedError()
	}

	noteResponse := &response.NoteResponse{
		ID:        noteCreated.ID,
		Text:      noteCreated.Text,
		CreatedAt: noteCreated.CreatedAt,
		User:      noteCreated.User,
	}

	return noteResponse, nil
}

func (s *noteServiceImpl) DeleteNoteByID(noteID uint, userID uint) error {

	note, err := s.GetNoteByIDV2(noteID)
	if err != nil {
		logs.Error(err)
		return errs.NewNotFoundError("Note not found")
	}

	if note.User.ID != userID {
		logs.Error("Forbidden")
		return errs.NewForbiddenError("Forbidden")
	}

	err = s.noteRepo.Delete(noteID, userID)
	if err != nil {
		logs.Error(err)
		return err
	}
	return nil
}
