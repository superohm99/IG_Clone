package user

import (
	"igclone/data/request"
	"igclone/data/response"
	"igclone/logs"
	"igclone/models"
	"igclone/repository/user"
	"igclone/utils"

	"gorm.io/gorm"
)

type userRepoService struct {
	UserRepo user.UserRepository
}

func NewUserService(UserRepo user.UserRepository) UserService {
	return &userRepoService{UserRepo: UserRepo}
}

func (s *userRepoService) CreateUser(user request.CreateUserRequest) (*response.UserResponse, error) {
	userModel := models.User{
		Username: user.Username,
		Password: user.Password,
		UserProfile: models.UserProfile{
			Email: user.Email,
			Phone: user.Phone,
		},
	}

	createUser, err := s.UserRepo.CreateUser(userModel)

	if err != nil {
		return nil, err
	}

	userResponse := response.UserResponse{
		ID:       createUser.ID,
		Username: createUser.Username,
		Email:    createUser.UserProfile.Email,
		Phone:    createUser.UserProfile.Phone,
		ImageUrl: createUser.UserProfile.ImageUrl,
	}

	return &userResponse, nil
}

func (s *userRepoService) GetUserByUsername(username string) (*response.UserResponse, *string, error) {
	user, err := s.UserRepo.GetByUsername(username)

	if err != nil {
		return nil, nil, err
	}

	userResponse := response.UserResponse{
		ID:       user.ID,
		Username: user.Username,
		Email:    user.UserProfile.Email,
		Phone:    user.UserProfile.Phone,
		ImageUrl: user.UserProfile.ImageUrl,
	}

	return &userResponse, &user.Password, nil
}

func (s *userRepoService) GetUserById(userID uint) (*models.User, error) {
	user, err := s.UserRepo.GetById(userID)

	if err != nil {
		logs.Error(err)
		return nil, err
	}

	return user, nil
}

func (s *userRepoService) GetUserResponseById(userID uint) (*response.UserResponse, error) {
	user, err := s.UserRepo.GetById(userID)

	if err != nil {
		logs.Error(err)
		return nil, err
	}

	userResponse := response.UserResponse{
		ID:       user.ID,
		Username: user.Username,
		Email:    user.UserProfile.Email,
		Phone:    user.UserProfile.Phone,
		ImageUrl: user.UserProfile.ImageUrl,
	}

	return &userResponse, nil
}

func (s *userRepoService) UpdateUser(userID uint, updateUserDTO request.UpdateUserDTO) error {
	var user map[string]interface{}
	var Profile map[string]interface{}

	if updateUserDTO.User != nil {
		user = utils.StructToMap(updateUserDTO.User)

		if updateUserDTO.User.Token == nil {
			user["token"] = gorm.Expr("NULL")
		}

		userError := s.UserRepo.UpdateUsers(userID, user)
		if userError != nil {
			logs.Error(userError)
			return userError
		}
	}

	if updateUserDTO.Profile != nil {
		Profile = utils.StructToMap(updateUserDTO.Profile)
		profileError := s.UserRepo.UpdateUserProfiles(userID, Profile)

		if profileError != nil {
			logs.Error(profileError)
			return profileError
		}
	}

	return nil
}

// func (s UserRepoService) AddFollow(c *gin.Context) (bool, error) {
// 	status, err := s.UserRepo.AddFollow(c)
// 	if err != nil {
// 		log.Println(err)
// 		return status, err
// 	}
// 	return status, err
// }

// func (s UserRepoService) GetClosedFriend(userid string) (Result, error) {
// 	users, friends, err := s.UserRepo.GetAllClosedFriend(userid)
// 	result := Result{
// 		Id:      uint(users.Id),
// 		Name:    string(users.Name),
// 		Friends: friends,
// 	}

// 	for _, friend := range friends {
// 		fmt.Println(friend.Id)
// 	}

// 	fmt.Println(result)
// 	return result, err
// }

// func (s UserRepoService) Getusers() ([]UserResponse, error) {
// 	users, err := s.UserRepo.GetAll()
// 	if err != nil {
// 		log.Println(err)
// 		return nil, err
// 	}

// 	UserResponses := []UserResponse{}
// 	for _, user := range users {
// 		UserResponse := UserResponse{
// 			Id:       user.Id,
// 			Name:     user.Name,
// 			Avatar:   user.Avatar,
// 			IsActive: user.IsActive,
// 		}
// 		UserResponses = append(UserResponses, UserResponse)
// 	}

// 	return UserResponses, nil
// }

// func (s UserRepoService) CreateUser(c *gin.Context) (bool, error) {
// 	status, err := s.UserRepo.UserCreate(c)
// 	if err != nil {
// 		log.Println(err)
// 		return status, err
// 	}
// 	return status, err
// }

// func (s UserRepoService) ProfileEdit(c *gin.Context) (bool, error) {
// 	status, err := s.UserRepo.ProfileEdit(c)
// 	if err != nil {
// 		log.Println(err)
// 		return status, err
// 	}
// 	return status, err
// }

// func (s UserRepoService) SignUp(c *gin.Context) (bool, error) {
// 	status, err := s.UserRepo.UserSignUp(c)
// 	if err != nil {
// 		log.Println(err)
// 		return status, err
// 	}
// 	return status, err
// }

// func (s UserRepoService) SignIn(c *gin.Context) (bool, error) {
// 	status, err := s.UserRepo.UserSignIn(c)
// 	if err != nil {
// 		log.Println(err)
// 		return status, err
// 	}
// 	return status, err
// }

// func (s UserRepoService) SignOut(c *gin.Context) (bool, error) {
// 	status, err := s.UserRepo.UserSignOut(c)
// 	if err != nil {
// 		log.Println(err)
// 		return status, err
// 	}
// 	return status, err
// }
