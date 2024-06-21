package models

import "gorm.io/gorm"

type Reel struct {
	gorm.Model
	Id    uint `gorm:"primaryKey"`
	Video string
	Title string
	Like  Like `gorm:"foreignKey:Reel_Id"`

	Comment []Comment `gorm:"foreignKey:Reel_Id"`
	User_Id uint
}
