package models

type Reply struct {
	Id      uint `gorm:"primaryKey"`
	Like    Like `gorm:"foreignKey:Id"`
	User    User `gorm:"foreignKey:Id"`
	Content string
}
