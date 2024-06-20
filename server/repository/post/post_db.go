package post

import (
	"igclone/initializers"
	"igclone/models"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	// repository_user "igclone/repository/user"
)

type PostRepositoryDB struct {
	db *gorm.DB
}

func NewPostRepositoryDB(db *gorm.DB) PostRepositoryDB {
	return PostRepositoryDB{db: db}
}

func (p PostRepositoryDB) GetAll() ([]models.Post, error) {
	posts := []models.Post{}

	// UserRepository := repository_user.NewUserRepositoryDB(initializers.DB)
	// UserRepository.AddFollow())

	result := p.db.Find(&posts)
	if result.Error != nil {
		return nil, result.Error
	}

	return posts, nil
}

func (r PostRepositoryDB) PostCreate(c *gin.Context) (bool, error) {
	var body struct {
		Image     string
		Title     string
		UserId    uint
		IsArchive bool
	}

	c.Bind(&body)
	// post := models.Post{Title: body.Title, Image: body.Image, User: body.User, IsArchive: false}

	result := initializers.DB.Create(&models.Post{Title: body.Title, Image: body.Image, User_Id: body.UserId})

	if result.Error != nil {
		c.Status(400)
		return false, c.Err()
	}

	c.JSON(200, gin.H{
		"post": body.Title,
	})
	return true, nil
}

func (r PostRepositoryDB) CommentCreate(c *gin.Context) (bool, error) {
	var body struct {
		PostId  uint
		Content string
		UserId  uint
	}

	c.Bind(&body)
	result := initializers.DB.Create(&models.Comment{Content: body.Content, Post_Id: body.PostId, User_Id: body.UserId})

	if result.Error != nil {
		c.Status(400)
		return false, c.Err()
	}

	c.JSON(200, gin.H{
		"Comment": body.Content,
	})

	return true, nil
}

func (r PostRepositoryDB) ReplyCreate(c *gin.Context) (bool, error) {
	var body struct {
		Comment_Id uint
		User_Id    uint
		Content    string
	}
	c.Bind(body)
	result := initializers.DB.Create(&models.Reply{Content: body.Content, CommentId: body.Comment_Id, User_Id: body.User_Id})

	if result.Error != nil {
		c.Status(400)
		return false, c.Err()
	}

	c.JSON(200, gin.H{
		"Reply": body.Content,
	})
	return true, nil
}
