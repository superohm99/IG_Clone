// jwt_service.go
package jwt

import (
	"igclone/logs"
	"os"
	"strconv"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

type JWTServiceImpl struct{}

func NewJWTService() JWTService {
	return &JWTServiceImpl{}
}

func (a *JWTServiceImpl) VerifyToken(tokenString string) (*uint, error) {
	secret := os.Getenv("SECRET")
	if secret == "" {
		logs.Error("SECRET not found")
		return nil, nil
	}

	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		return []byte(secret), nil
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
	secret := os.Getenv("SECRET")
	if secret == "" {
		logs.Error("SECRET not found")
		return nil, nil
	}

	claims := &jwt.MapClaims{
		"sub": strconv.Itoa(int(userID)),
		"iat": time.Now().Unix(),
		"exp": time.Now().Add(time.Hour * 24).Unix(),
	}
	t := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	s, err := t.SignedString([]byte(secret))
	if err != nil {
		logs.Error(err)
		return nil, err
	}
	return &s, nil
}
