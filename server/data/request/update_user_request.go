package request

type UpdateUserRequest struct {
	Password        *string
	IsActive        *bool
	Token           *string
	IsPublicAccount *bool
}

type UpdateUserProfileRequest struct {
	Name        *string
	ImageUrl    *string
	Description *string
}

type UpdateUserDTO struct {
	User    *UpdateUserRequest
	Profile *UpdateUserProfileRequest
}
