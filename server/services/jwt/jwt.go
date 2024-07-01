package jwtsrv

type JWTService interface {
	VerifyToken(string) (*uint, error)
	GenerateToken(uint) (*string, error)
}