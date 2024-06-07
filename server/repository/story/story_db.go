package story

import (
	"igclone/models"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type storyRepositoryDB struct {
	db *gorm.DB
}

func NewStoryRepositoryDB(db *gorm.DB) storyRepositoryDB {
	return storyRepositoryDB{db: db}
}

func (r storyRepositoryDB) GetByUserId(id string) ([]models.Story, error) {
	var stories []models.Story
	result := r.db.Preload("User").Where("Id = ?", id).Find(&stories)

	if result.Error != nil {
		return nil, result.Error
	}

	return stories, nil
}

func (r storyRepositoryDB) StoryCreate(c *gin.Context) (bool, error) {
	var body struct {
		Id        uint `gorm:"primaryKey"`
		Image     string
		Like      models.Like
		User      models.User
		Reply     []models.Reply
		IsPrivate bool
		IsDeleted bool
	}

	c.Bind(&body)

	story := models.Story{
		Image:     body.Image,
		Like:      body.Like,
		User:      body.User,
		Reply:     body.Reply,
		IsPrivate: body.IsPrivate,
		IsDeleted: body.IsDeleted,
	}

	result := r.db.Create(&story)

	if result.Error != nil {
		c.Status(400)
		return false, c.Err()
	}
	c.JSON(200, gin.H{
		"story": story,
	})
	return true, nil
}
