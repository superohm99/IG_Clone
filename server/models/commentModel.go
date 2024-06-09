package models

type Comment struct {
	Id       uint `gorm:"primaryKey"`
	Reply_Id uint
	User_Id  uint
	Post_Id  uint
	Content  string
}
