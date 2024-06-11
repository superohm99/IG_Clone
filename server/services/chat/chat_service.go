package chat

import (
	"fmt"
	"igclone/repository/chat"
	"log"

	"github.com/gin-gonic/gin"
)

type ChatRepoService struct {
	ChatRepo chat.ChatRepository
}

func NewChatService(ChatRepo chat.ChatRepository) ChatRepoService {
	return ChatRepoService{ChatRepo: ChatRepo}
}

func (s ChatRepoService) ChatCreate(c *gin.Context) (bool, error) {
	status, err := s.ChatRepo.ChatCreate(c)
	if err != nil {
		log.Println(err)
		return status, err
	}
	fmt.Println(status)
	return status, nil
}

func (s ChatRepoService) MessageCreate(c *gin.Context) (bool, error) {
	status, err := s.ChatRepo.MessageCreate(c)
	if err != nil {
		log.Println(err)
		return status, err
	}
	fmt.Println(status)
	return true, nil
}
