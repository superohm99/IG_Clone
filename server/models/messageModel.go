package models

type Message struct {
	ID uint `gorm:"primaryKey;autoIncrement"`
	Text	string 
	CreatedAt	string
	UserID	uint
	User	User `gorm:"foreignKey:UserID"`
}