package models

type Comment struct {
	Id      uint    `gorm:"primaryKey"`
	Reply   []Reply `gorm:"foreignKey:CommentId"`
	User_Id uint
	Post_Id uint
	Content string
}
