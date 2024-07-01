package request

type CreateNoteRequest struct {
	Text string `json:"text" binding:"required,max=60"`
}