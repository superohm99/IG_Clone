package request

type LoginRequest struct {
	Username string `json:"username" binding:"required,lowercase"`
}