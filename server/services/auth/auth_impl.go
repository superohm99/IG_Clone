package authsrv

import (
	"igclone/data/request"
	"igclone/data/response"
	"igclone/errs"
	"igclone/logs"
	jwt_service "igclone/services/jwt"
	user_service "igclone/services/user"
)

type authServiceImpl struct {
	jwtSrv  jwt_service.JWTService
	userSrv user_service.UserService
}

func NewAuthService(jwtSrv jwt_service.JWTService, userSrv user_service.UserService) AuthService {
	return &authServiceImpl{
		jwtSrv:  jwtSrv,
		userSrv: userSrv,
	}
}

func (s *authServiceImpl) Login(userDto request.LoginRequest) (*response.AuthResponse, error) {
	user, err := s.userSrv.GetUserByUsername(userDto.Username)
	if err != nil {
		logs.Error(err)
		return nil, errs.NewNotFoundError("User not found")
	}

	token, err := s.jwtSrv.GenerateToken(user.ID)
	if err != nil {
		logs.Error(err)
		return nil, err
	}

	authResponse := &response.AuthResponse{
		Token: response.TokenResponse{
			AccessToken: *token,
		},
		User: *user,
	}

	return authResponse, nil
}

func (s *authServiceImpl) Register(userDto request.CreateUserRequest) (*response.AuthResponse, error) {
	user, err := s.userSrv.CreateUser(userDto)
	if err != nil {
		logs.Error(err)
		return nil, err
	}

	token, err := s.jwtSrv.GenerateToken(user.ID)
	if err != nil {
		logs.Error(err)
		return nil, err
	}

	authResponse := &response.AuthResponse{
		Token: response.TokenResponse{
			AccessToken: *token,
		},
		User: *user,
	}

	return authResponse, nil
}
