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

func NewStoryRepositoryDB(db *gorm.DB) storyRepositoryDB {
	return storyRepositoryDB{db: db}
}

func (r storyRepositoryDB) GetAll() ([]models.Story, error) {
	stories := []models.Story{}
	result := r.db.Find(&stories)

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

	if err := c.ShouldBindJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return false, err
	}

	story := models.Story{Image: body.Image}

	result := r.db.Create(&story)

	if result.Error != nil {
		c.Status(400)
		return false, c.Err()
	}
	c.JSON(200, gin.H{
		"user": story.Id,
	})
	return true, nil
}
