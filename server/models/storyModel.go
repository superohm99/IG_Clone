package models

import "gorm.io/gorm"

type Story struct {
	gorm.Model
	Id        uint `gorm:"primaryKey"`
	Image     string
	Like      Like    `gorm:"foreignKey:Id"`
	User      User    `gorm:"foreignKey:Id"`
	Reply     []Reply `gorm:"foreignKey:Id"`
	IsPrivate bool
	IsDeleted bool
}
