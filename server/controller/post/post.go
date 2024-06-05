package post

import (
	"igclone/services/post"

	"github.com/gin-gonic/gin"
)

type PostController struct {
	PostSrv post.PostService
}

func NewPostController(PostSrv post.PostService) PostController {
	return PostController{PostSrv: PostSrv}
}

func (p PostController) Posts() ([]post.PostResponse, error) {
	return p.PostSrv.GetAllPost()
}

func (p PostController) PostCreate(c *gin.Context) (bool, error) {
	return p.PostSrv.PostCreate(c)
}
