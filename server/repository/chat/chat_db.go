package chat

import (
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
	result := r.db.Create(&chat)

	if result.Error != nil {
		c.Status(400)
		return false, c.Err()
	}

	r.db.Save(&chat)
	c.JSON(200, gin.H{
		"ChatId": chat.Id,
	})

	return true, nil
}

func (r ChatRepositoryDB) GetMessageFilter(ChatId string) ([]models.Message, error) {
	messages := []models.Message{}

	result := r.db.Where("chat_id = ?", ChatId).Find(&messages)
	if result.Error != nil {
		return nil, result.Error
	}

	return messages, nil
}

func (r ChatRepositoryDB) MessageCreate(c *gin.Context) (bool, error) {

	var body struct {
		UserId uint
		ChatId uint
		Text   string
	}

	c.Bind(&body)

	message := models.Message{
		UserId: body.UserId,
		ChatId: body.ChatId,
		Text:   body.Text,
	}

	result := r.db.Create(&message)

	if result.Error != nil {
		c.Status(400)
		return false, c.Err()
	}

	// initializers.DB.Save(&message)

	c.JSON(200, gin.H{
		"Id": message.Id,
	})

	return true, nil
}
