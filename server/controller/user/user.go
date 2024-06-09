package user

import (
	"igclone/services/user"

	"github.com/gin-gonic/gin"
)

type UserController struct {
	UserSrv user.UserService
}

func NewUserController(UserSrv user.UserService) UserController {
	return UserController{UserSrv: UserSrv}
}

func (h UserController) GetUsers() {
	h.UserSrv.Getusers()
}

func (h UserController) CreateUser(c *gin.Context) {
	h.UserSrv.CreateUser(c)
}

func (h UserController) SignUp(c *gin.Context) {
	h.UserSrv.SignUp(c)
}
