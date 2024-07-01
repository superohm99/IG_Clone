package jwtsrv

import (
	"igclone/logs"
	usersrv "igclone/services/user"
	"strconv"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

type JWTServiceImpl struct {
	userSrv usersrv.UserService
}

func NewJWTService(userSrv usersrv.UserService) JWTService {
	return &JWTServiceImpl{userSrv: userSrv}
}

func (a *JWTServiceImpl) VerifyToken(tokenString string) (*uint, error) {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		return []byte("secret"), nil
	})
	if err != nil {
		logs.Error(err)
		return nil, err
	}
	claims := token.Claims.(jwt.MapClaims)
	sub := claims["sub"].(string)

	userID, err := strconv.Atoi(sub)
	if err != nil {
		logs.Error(err)
		return nil, err
	}
	userIDuint := uint(userID)
	return &userIDuint, nil
}

func (a *JWTServiceImpl) GenerateToken(userID uint) (*string, error) {
	key := []byte("secret")
	claims := &jwt.MapClaims{
		"sub": strconv.Itoa(int(userID)),
		"iat": time.Now().Unix(),
		"exp": time.Now().Add(time.Hour * 24).Unix(),
	}
	t := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	s, err := t.SignedString(key)
	if err != nil {
		logs.Error(err)
		return nil, err
	}
	return &s, nil
}
