package post

import (
	"fmt"
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

func (s PostRepoService) GetAllPost() ([]PostResponse, error) {
	posts, err := s.PostRepo.GetAll()
	if err != nil {
		log.Println(err)
		return nil, err
	}
	PostResponses := []PostResponse{}
	for _, post := range posts {
		PostResponse := PostResponse{
			Id:       post.Id,
			Image:    post.Image,
			Title:    post.Title,
			IsActive: post.IsArchive,
		}
		PostResponses = append(PostResponses, PostResponse)
	}
	// fmt.Println(result)
	return PostResponses, nil
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

func (s PostRepoService) CommentCreate(c *gin.Context) (bool, error) {
	status, err := s.PostRepo.CommentCreate(c)
	if err != nil {
		log.Println(err)
		return status, err
	}
	fmt.Println(status)
	return status, nil
}
