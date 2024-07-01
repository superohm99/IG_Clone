package response

import "igclone/models"

type TokenResponse struct {
	AccessToken string `json:"accessToken"`
}

type AuthResponse struct {
	Token TokenResponse `json:"token"`
	User  models.TempUser   `json:"user"`
}