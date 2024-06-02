package models

type Chat struct {
	ID uint `gorm:"primaryKey;autoIncrement"`
	Messages []Message `gorm:"foreignKey:ChatID"`
	Members []User `gorm:"many2many:chat_members;"`
}