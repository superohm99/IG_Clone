package models

type Like struct {
	Id      uint `gorm:"primaryKey"`
	Post    Post `gorm:"foreignKey:Like_Id"`
	User_Id uint
	// User    User
}
