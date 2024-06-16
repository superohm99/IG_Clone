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

func (h UserController) EditProfile(c *gin.Context) {
	h.UserSrv.ProfileEdit(c)
}

func (h UserController) AddFollow(c *gin.Context) {
	h.UserSrv.AddFollow(c)
}

func (h UserController) GetClosedFriend(userid string) {
	h.UserSrv.GetClosedFriend(userid)
}

func (h UserController) SignUp(c *gin.Context) {
	h.UserSrv.SignUp(c)
}

func (h UserController) SignIn(c *gin.Context) {
	h.UserSrv.SignIn(c)
}

func (h UserController) SignOut(c *gin.Context) {
	h.UserSrv.SignOut(c)
}
