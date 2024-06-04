package user

type UserResponse struct {
	Id       uint   `json:"id"`
	Name     string `json:"name"`
	Avatar   string `json:"avatar"`
	IsActive bool   `json:"isactive"`
}

type UserService interface {
	Getusers() ([]UserResponse, error)
}