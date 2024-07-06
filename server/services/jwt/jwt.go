package jwt

type JWTService interface {
	VerifyToken(tokenString string) (*uint, error)
	GenerateToken(userID uint) (*string, error)
}
