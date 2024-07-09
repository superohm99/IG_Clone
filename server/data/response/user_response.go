package response

type UserResponse struct {
	ID          uint   `json:"id"`
	Username    string `json:"username"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Email       string `json:"email"`
	Phone       string `json:"phone"`
	ImageUrl    string `json:"image_url"`
}
