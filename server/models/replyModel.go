package models

type Reply struct {
	Id        uint `gorm:"primaryKey"`
	CommentId uint
	Likes     []Like `gorm:"foreignKey:Reply_Id"`
	User_Id   uint
	Story_Id  uint
	Content   string
}
