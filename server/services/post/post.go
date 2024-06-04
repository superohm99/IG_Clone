package post

import "github.com/gin-gonic/gin"

type PostService interface {
	PostCreate(c *gin.Context) (bool, error)
}
