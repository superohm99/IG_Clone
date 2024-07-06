package request

type CreateUserRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
	Email    string `json:"email"`
	Phone    string `json:"phone"`
}
