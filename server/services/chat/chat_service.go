package chat

import (
	"igclone/repository/chat"

	"github.com/gin-gonic/gin"
)

type ChatRepoService struct {
	ChatRepo chat.ChatRepository
}

func NewChatService(ChatRepo chat.ChatRepository) ChatRepoService {
	return ChatRepoService{ChatRepo: ChatRepo}
}

func (s ChatRepoService) ChatCreate(c *gin.Context) (bool, error) {
	return true, nil
}

func (s ChatRepoService) MessageCreate(c *gin.Context) (bool, error) {

	return true, nil
}
