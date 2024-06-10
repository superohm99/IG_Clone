package chat

import (
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

	return true, nil
}

func (r ChatRepositoryDB) MessageCreate(c *gin.Context) (bool, error) {

	return true, nil
}
