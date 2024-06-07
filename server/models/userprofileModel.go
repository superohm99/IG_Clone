package models

type Userprofile struct {
	// gorm.Model
	Id          uint `gorm:"primaryKey"`
	Phone       string
	Image       string
	Description string

	Profile User `gorm:"foreignKey:User_profileID"`
}
