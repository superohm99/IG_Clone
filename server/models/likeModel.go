package models

type Like struct {
	Id   uint   `gorm:"primaryKey"`
	User []User `gorm:"foreignKey:Id"`
}
