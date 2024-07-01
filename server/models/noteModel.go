package models

type Note struct {
	ID uint
	Text string `gorm:"size:60"`
	CreatedAt string
	UserID uint
	User TempUser
}