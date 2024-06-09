package story

import (
	"igclone/models"
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type storyRepositoryDB struct {
	db *gorm.DB
}

func NewStoryRepositoryDB(db *gorm.DB) StoryRepository {
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
		IsDeleted: false,
	}

	result := r.db.Create(&story)

	if result.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to create story",
		})
		return false, c.Err()
	}

	c.JSON(http.StatusOK, gin.H{
		"story": story,
	})

	return true, nil
}
