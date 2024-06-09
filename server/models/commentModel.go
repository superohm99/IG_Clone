package models

type Comment struct {
	Id      uint    `gorm:"primaryKey"`
	User    User    `gorm:"foreignKey:Id"`
	Like    Like    `gorm:"foreignKey:Id"`
	Replies []Reply `gorm:"foreignKey:Id"`
	Content string
}
