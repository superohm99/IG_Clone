package user

import (
	"igclone/repository/user"
	"log"

	"github.com/gin-gonic/gin"
)

type UserRepoService struct {
	UserRepo user.UserRepository
}

func NewUserService(UserRepo user.UserRepository) UserRepoService {
	return UserRepoService{UserRepo: UserRepo}
}

func (s UserRepoService) Getusers() ([]UserResponse, error) {
	users, err := s.UserRepo.GetAll()
	if err != nil {
		log.Println(err)
		return nil, err
	}

	UserResponses := []UserResponse{}
	for _, user := range users {
		UserResponse := UserResponse{
			Id:       user.Id,
			Name:     user.Name,
			Avatar:   user.Avatar,
			IsActive: user.IsActive,
		}
		UserResponses = append(UserResponses, UserResponse)
	}

	return UserResponses, nil
}

func (s UserRepoService) CreateUser(c *gin.Context) (bool, error) {
	status, err := s.UserRepo.UserCreate(c)
	if err != nil {
		log.Println(err)
		return status, err
	}
	return status, err
}
