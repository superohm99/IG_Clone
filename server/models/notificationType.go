package models

type NotificationType struct {
	ID   uint
	Type string `gorm:"unique"` // "REQUEST", "FOLLOW", "LIKEPOST", "LIKESTORY"
	Name string
}