package user

import (
	"igclone/services/user"
)

type UserHandler struct {
	UserSrv user.UserService
}

func NewUserHandler(UserSrv user.UserService) UserHandler {
	return UserHandler{UserSrv: UserSrv}
}

func (h UserHandler) GetUsers() {
	// users, err := h.UserSrv.Getusers()
	// if err != nil {
	// 	fmt.Println(err)
	// }

}
