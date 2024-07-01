package response

import "igclone/models"

type NoteResponse struct {
	ID        uint        `json:"id"`
	Text      string      `json:"text"`
	CreatedAt string      `json:"createdAt"`
	User      models.TempUser `json:"user"`
}