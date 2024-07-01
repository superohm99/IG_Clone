package request

type CreateUserRequest struct {
	Username string `json:"username" binding:"required,lowercase"`
	Name string `json:"name" binding:"required"`
}