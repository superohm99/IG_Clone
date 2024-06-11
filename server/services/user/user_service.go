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

func (s UserRepoService) SignUp(c *gin.Context) (bool, error) {
	status, err := s.UserRepo.UserSignUp(c)
	if err != nil {
		log.Println(err)
		return status, err
	}
	return status, err
}

func (s UserRepoService) SignIn(c *gin.Context) (bool, error) {
	status, err := s.UserRepo.UserSignIn(c)
	if err != nil {
		log.Println(err)
		return status, err
	}
	return status, err
}

func (s UserRepoService) SignOut(c *gin.Context) (bool, error) {
	status, err := s.UserRepo.UserSignOut(c)
	if err != nil {
		log.Println(err)
		return status, err
	}
	return status, err
}
