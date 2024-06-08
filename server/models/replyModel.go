package models

type Reply struct {
	Id       uint      `gorm:"primaryKey"`
	Comments []Comment `gorm:"foreignKey:Reply_Id"`
	User_Id  uint
	Content  string
}
