package models

type UserProfile struct {
	ID          uint
	Name        string
	Email       string
	ImageUrl    string `gorm:"default:'https://shorturl.at/vEUUK"`
	Phone       string
	Description string
	UserID      uint
}
