package post

import (
	"fmt"
	"igclone/initializers"
	"igclone/models"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type PostRepositoryDB struct {
	db *gorm.DB
}

func NewPostRepositoryDB(db *gorm.DB) PostRepositoryDB {
	return PostRepositoryDB{db: db}
}

func (p PostRepositoryDB) GetAll() ([]models.Post, error) {
	posts := []models.Post{}

	result := p.db.Find(&posts)
	if result.Error != nil {
		return nil, result.Error
	}

	return posts, nil
}

func (r PostRepositoryDB) PostCreate(c *gin.Context) (bool, error) {
	var body struct {
		Id        uint `gorm:"primaryKey"`
		Image     string
		Title     string
		Like      models.Like
		Comment   []models.Comment
		User      uint
		IsArchive bool
	}

	c.Bind(&body)
	// post := models.Post{Title: body.Title, Image: body.Image, User: body.User, IsArchive: false}

	result := initializers.DB.Create(&models.Post{Title: body.Title, Image: body.Image, User: models.User{Id: body.User}})

	if result.Error != nil {
		fmt.Println("5555")
		c.Status(400)
		return false, c.Err()
	}

	c.JSON(200, gin.H{
		"post": body.Title,
	})
	return true, nil
}
