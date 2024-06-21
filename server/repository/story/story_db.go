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

func (r storyRepositoryDB) GetAll() ([]models.Story, error) {
	var stories []models.Story

	result := r.db.Find(&stories)

	if result.Error != nil {
		return nil, result.Error
	}

	return stories, nil
}

func (r storyRepositoryDB) GetOnlyFollowing(c *gin.Context) ([]models.Story, error) {
	var stories []models.Story
	var user models.User

	activeUser, _ := c.Get("user")
	r.db.Preload("Closed_friend").Find(&user, activeUser.(models.User).Id)
	following := user.Closed_friend

	for _, friend := range following {
		var friendStories []models.Story
		result := r.db.Where("user_id = ?", friend.Id).Find(&friendStories)
		if result.Error != nil {
			return nil, result.Error
		}

		stories = append(stories, friendStories...)
	}

	return stories, nil
}

func (r storyRepositoryDB) GetByUserId(id string) ([]models.Story, error) {
	var stories []models.Story

	result := r.db.Where("user_id = ?", id).Find(&stories)

	if result.Error != nil {
		return nil, result.Error
	}

	return stories, nil
}

func (r storyRepositoryDB) StoryCreate(c *gin.Context) (bool, error) {
	var body struct {
		Id        uint `gorm:"primaryKey"`
		Image     string
		IsPrivate bool
	}

	c.Bind(&body)
	user, _ := c.Get("user")

	story := models.Story{
		Image:     body.Image,
		User_Id:   user.(models.User).Id,
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
