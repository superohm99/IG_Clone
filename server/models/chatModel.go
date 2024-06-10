package models

type Chat struct {
	Id        uint    `gorm:"primaryKey"`
	Message   Message `gorm:"foreignKey:Chat_Id"`
	Chat_link []User  `gorm:"many2many:Chat_link"`
}
