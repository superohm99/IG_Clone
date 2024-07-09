package auth

import (
	"igclone/data/request"
	"igclone/data/response"
	"igclone/errs"
	"igclone/logs"
	jwt_service "igclone/services/jwt"
	user_service "igclone/services/user"
	"os"

	"golang.org/x/crypto/bcrypt"
)

type authService struct {
	jwtSrv  jwt_service.JWTService
	userSrv user_service.UserService
}

func NewAuthService(jwtSrv jwt_service.JWTService, userSrv user_service.UserService) AuthService {
	return &authService{jwtSrv, userSrv}
}

func (s *authService) Login(createUser request.LoginRequest) (*response.AuthResponse, error) {
	user, hashedPwd, err := s.userSrv.GetUserByUsername(createUser.Username)

	if err != nil {
		logs.Error(err)
		return nil, err
	}

	if !s.comparePasswords(*hashedPwd, []byte(createUser.Password)) {
		logs.Error("Invalid password")
		return nil, errs.NewUnauthorizedError("Invalid password")
	}

	token, err := s.jwtSrv.GenerateToken(user.ID)
	if err != nil {
		logs.Error(err)
		return nil, err
	}

	is_active := true
	tokenRequest := &request.UpdateUserDTO{
		User: &request.UpdateUserRequest{
			IsActive: &is_active,
			Token:    token,
		},
	}

	if err := s.userSrv.UpdateUser(user.ID, *tokenRequest); err != nil {
		logs.Error(err)
		return nil, err
	}

	authResponse := &response.AuthResponse{
		Token: *token,
		User:  *user,
	}

	return authResponse, nil
}

func (s *authService) Register(createUser request.CreateUserRequest) (*response.AuthResponse, error) {
	hashedPwd := s.hashAndSalt([]byte(createUser.Password))
	if hashedPwd == nil {
		return nil, errs.NewInternalServerError("Failed to hash password")
	}

	createUser.Password = *hashedPwd

	user, err := s.userSrv.CreateUser(createUser)
	if err != nil {
		logs.Error(err)
		return nil, err
	}

	token, err := s.jwtSrv.GenerateToken(user.ID)
	if err != nil {
		logs.Error(err)
		return nil, err
	}

	is_active := true
	tokenRequest := &request.UpdateUserDTO{
		User: &request.UpdateUserRequest{
			IsActive: &is_active,
			Token:    token,
		},
	}

	if err := s.userSrv.UpdateUser(user.ID, *tokenRequest); err != nil {
		logs.Error(err)
		return nil, err
	}

	authResponse := &response.AuthResponse{
		Token: *token,
		User:  *user,
	}

	return authResponse, nil
}

func (s *authService) Logout(userID uint) error {
	user, err := s.userSrv.GetUserById(userID)

	if err != nil {
		logs.Error(err)
		return err
	}

	if user.Token == nil && !user.IsActive {
		// Already logged out
		logs.Error("User already logged out")
		return errs.NewInternalServerError("User already logged out")
	}

	is_active := false
	logoutRequest := &request.UpdateUserDTO{
		User: &request.UpdateUserRequest{
			IsActive: &is_active,
			Token:    nil,
		},
	}

	if err := s.userSrv.UpdateUser(user.ID, *logoutRequest); err != nil {
		logs.Error(err)
		return err
	}

	return nil
}

func (s *authService) hashAndSalt(password []byte) *string {
	saltRoundStr := os.Getenv("SALT_ROUND")
	saltRound := 0
	if saltRoundStr != "" {
		saltRound = int(saltRound)
	}

	hashedPwdByte, err := bcrypt.GenerateFromPassword(password, saltRound)
	if err != nil {
		logs.Error(err)
		return nil
	}

	hashedPwd := string(hashedPwdByte)
	return &hashedPwd
}

func (s *authService) comparePasswords(hashedPwd string, plainPwd []byte) bool {
	byteHash := []byte(hashedPwd)
	err := bcrypt.CompareHashAndPassword(byteHash, plainPwd)
	if err != nil {
		logs.Error(err)
		return false
	}

	return true
}
