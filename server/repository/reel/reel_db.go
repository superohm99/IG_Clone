package reel

import (
	"igclone/models"
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type reelRepositoryDB struct {
	db *gorm.DB
}

func NewReelRepositoryDB(db *gorm.DB) ReelRepository {
	return reelRepositoryDB{db: db}
}

func (r reelRepositoryDB) GetAll() ([]models.Reel, error) {
	var reels []models.Reel

	result := r.db.Find(&reels)
	if result.Error != nil {
		return nil, result.Error
	}

	return reels, nil
}

func (r reelRepositoryDB) GetOnlyFollowing(c *gin.Context) ([]models.Reel, error) {
	var reels []models.Reel
	var user models.User

	activeUser, _ := c.Get("user")
	r.db.Preload("Closed_friend").Find(&user, activeUser.(models.User).Id)
	following := user.Closed_friend

	for _, friend := range following {
		var friendReels []models.Reel
		result := r.db.Where("user_id = ?", friend.Id).Find(&friendReels)
		if result.Error != nil {
			return nil, result.Error
		}

		reels = append(reels, friendReels...)
	}

	return reels, nil
}

func (r reelRepositoryDB) GetByUserId(id string) ([]models.Reel, error) {
	var reels []models.Reel

	result := r.db.Where("user_id = ?", id).Find(&reels)

	if result.Error != nil {
		return nil, result.Error
	}

	return reels, nil
}

func (r reelRepositoryDB) ReelCreate(c *gin.Context) (bool, error) {
	var body struct {
		Video string
		Title string
	}

	c.Bind(&body)
	user, _ := c.Get("user")

	reel := models.Reel{
		Video:   body.Video,
		Title:   body.Title,
		User_Id: user.(models.User).Id,
	}

	result := r.db.Create(&reel)

	if result.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to create reel",
		})
		return false, c.Err()
	}

	c.JSON(http.StatusOK, gin.H{
		"reel": reel,
	})

	return true, nil
}

func (r reelRepositoryDB) CommentCreate(c *gin.Context) (bool, error) {
	var body struct {
		ReelId  uint
		Content string
	}

	c.Bind(&body)
	user, _ := c.Get("user")

	comment := models.Comment{
		Reel_Id: body.ReelId,
		Content: body.Content,
		User_Id: user.(models.User).Id,
	}

	result := r.db.Create(&comment)

	if result.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error":   "Failed to create comment on reel",
			"details": result.Error.Error(),
		})
	}

	c.JSON(http.StatusOK, gin.H{
		"comment": comment,
	})

	return true, nil
}
