package post

import (
	"fmt"
	"igclone/models"
	"igclone/repository/post"
	"log"

	"github.com/gin-gonic/gin"
)

type PostRepoService struct {
	PostRepo post.PostRepository
}

func NewPostService(PostRepo post.PostRepository) PostRepoService {
	return PostRepoService{PostRepo: PostRepo}
}

func (s PostRepoService) GetAllPost() ([]models.Post, error) {
	result, err := s.PostRepo.GetAll()
	if err != nil {
		log.Println(err)
		return result, err
	}
	// fmt.Println(result)
	return result, nil
}

func (s PostRepoService) PostCreate(c *gin.Context) (bool, error) {
	status, err := s.PostRepo.PostCreate(c)
	if err != nil {
		log.Println(err)
		return status, err
	}
	fmt.Println(status)
	return status, nil
}
