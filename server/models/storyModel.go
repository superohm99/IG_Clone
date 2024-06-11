package models

import "gorm.io/gorm"

type Story struct {
	gorm.Model
	Id        uint `gorm:"primaryKey"`
	Image     string
	Like      Like `gorm:"foreignKey:Story_Id"`
	User_Id   uint
	Reply     []Reply `gorm:"foreignKey:Story_Id"`
	IsPrivate bool
	IsDeleted bool
}
