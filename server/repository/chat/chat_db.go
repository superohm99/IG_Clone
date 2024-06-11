package chat

import (
	"igclone/initializers"
	"igclone/models"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type ChatRepositoryDB struct {
	db *gorm.DB
}

func NewChatRepositoryDB(db *gorm.DB) ChatRepositoryDB {
	return ChatRepositoryDB{db: db}
}

func (r ChatRepositoryDB) ChatCreate(c *gin.Context) (bool, error) {

	var body struct {
		UserId   uint
		FriendId uint
	}

	c.Bind(&body)

	chat := models.Chat{
		Chat_link: []models.User{{Id: body.UserId}, {Id: body.FriendId}},
	}
	result := initializers.DB.Create(&chat)

	if result.Error != nil {
		c.Status(400)
		return false, c.Err()
	}

	initializers.DB.Save(&chat)
	c.JSON(200, gin.H{
		"ChatId": chat.Id,
	})

	return true, nil
}

func (r ChatRepositoryDB) MessageCreate(c *gin.Context) (bool, error) {

	return true, nil
}
