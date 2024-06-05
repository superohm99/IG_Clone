package post

import (
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
		User      models.User
		CreateAt  string `gorm:"autoCreateTime"`
		IsArchive bool
	}

	c.Bind(&body)
	post := models.Post{Title: body.Title}

	result := initializers.DB.Create(&post)

	if result.Error != nil {
		c.Status(400)
		return false, c.Err()
	}
	c.JSON(200, gin.H{
		"user": post.Title,
	})
	return true, nil
}
