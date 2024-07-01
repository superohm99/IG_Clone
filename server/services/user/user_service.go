package user_service

import (
	"igclone/data/request"
	"igclone/errs"
	"igclone/logs"
	"igclone/models"
	user_repository "igclone/repository/user"
)

type userServiceImpl struct {
	userRepo user_repository.UserRepository
}

func NewUserService(userRepo user_repository.UserRepository) UserService {
	return &userServiceImpl{userRepo: userRepo}
}

func (s *userServiceImpl) GetUsers() ([]models.TempUser, error) {
	users, err := s.userRepo.FindAll()
	if err != nil {
		return nil, errs.NewUnexpectedError()
	}

	return users, nil
}

func (s *userServiceImpl) GetUserByID(userID uint) (*models.TempUser, error) {
	user, err := s.userRepo.FindByID(userID)
	if err != nil {
		return nil, errs.NewNotFoundError("User not found")
	}

	return user, nil
}

func (s *userServiceImpl) GetUserByUsername(username string) (*models.TempUser, error) {
	user, err := s.userRepo.FindByUsername(username)
	if err != nil {
		return nil, errs.NewNotFoundError("User not found")
	}

	return user, nil
}

func (s *userServiceImpl) CreateUser(user request.CreateUserRequest) (*models.TempUser, error) {
	newUser := models.TempUser{
		Username: user.Username,
		Name:     user.Name,
	}
	createdUser, err := s.userRepo.Save(newUser)
	if err != nil {
		logs.Error("Error while saving user: " + err.Error())
		return nil, errs.NewBadRequestError("User already exists")
	}

	return createdUser, nil
}

func (s *userServiceImpl) Login(login request.LoginRequest) (*models.TempUser, error) {
	user, err := s.userRepo.FindByUsername(login.Username)
	if err != nil {
		return nil, errs.NewNotFoundError("User not found")
	}

	return user, nil
}
