package noterepo

import (
	"gorm.io/gorm"
	"igclone/models"
	"time"
)

type noteRepositoryImpl struct {
	db *gorm.DB
}

func NewNoteRepository(db *gorm.DB) NoteRepository {
	return &noteRepositoryImpl{db: db}
}

func (r *noteRepositoryImpl) FindByID(noteID uint) (*models.Note, error) {
	note := &models.Note{}
	if err := r.db.Preload("User").Where("id = ?", noteID).First(note).Error; err != nil {
		return nil, err
	}
	return note, nil
}

func (r *noteRepositoryImpl) FindByUserID(userID uint) (*models.Note, error) {
	note := &models.Note{}
	if err := r.db.Preload("User").
		Where("user_id = ? AND created_at > (NOW() - INTERVAL 24 HOUR)", userID).
		Order("created_at DESC").
		Limit(1).
		First(&note).Error; err != nil {
		return nil, err
	}

	return note, nil
}

func (r *noteRepositoryImpl) FindByUsername(username string) (*models.Note, error) {
	note := &models.Note{}
	if err := r.db.Preload("User").Where("username = ?", username).First(note).Error; err != nil {
		return nil, err
	}

	return note, nil
}

func (r *noteRepositoryImpl) FindAll() ([]models.Note, error) {
	notes := []models.Note{}
	twentyFourHoursAgo := time.Now().Add(-24 * time.Hour)

	if err := r.db.Raw("SELECT n1.* FROM notes n1 INNER JOIN (SELECT user_id, MAX(created_at) AS max_date FROM notes WHERE created_at > ? GROUP BY user_id) n2 ON n1.user_id = n2.user_id AND n1.created_at = n2.max_date ORDER BY n1.created_at DESC", twentyFourHoursAgo).Scan(&notes).Error; err != nil {
		return nil, err
	}

	for i := range notes {
		if err := r.db.Model(&notes[i]).Association("User").Find(&notes[i].User); err != nil {
			return nil, err
		}
	}
	return notes, nil
}

func (r *noteRepositoryImpl) Save(note models.Note) (*models.Note, error) {
	if err := r.db.Create(&note).Error; err != nil {
		return nil, err
	}

	latestNote := &models.Note{}
	if err := r.db.Preload("User").Where("id = ?", note.ID).First(latestNote).Error; err != nil {
		return nil, err
	}
	return latestNote, nil
}

func (r *noteRepositoryImpl) Delete(noteID uint, userID uint) error {
	if err := r.db.Where("id = ?", noteID).Delete(&models.Note{}).Error; err != nil {
		return err
	}
	return nil
}
