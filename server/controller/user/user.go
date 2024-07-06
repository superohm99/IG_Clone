package user

import (
	"fmt"
	"igclone/controller"
	"igclone/data/request"
	"igclone/errs"
	"igclone/logs"
	"igclone/services/user"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type userController struct {
	userSrv user.UserService
}

func NewUserController(userSrv user.UserService) *userController {
	return &userController{userSrv: userSrv}
}

func (h *userController) GetUserById(c *gin.Context) {
	var userID string
	var userIDUint uint64
	var err error

	// Try to get user ID from URL parameter
	userID = c.Param("id")
	if userID != "" {
		userIDUint, err = strconv.ParseUint(userID, 10, 64)
	} else {
		// If not found in URL parameter, get from context
		id, exist := c.Get("user_id")
		if !exist {
			controller.HandleError(errs.NewUnauthorizedError("Unauthorized"), c)
			return
		}
		userID = fmt.Sprintf("%v", id)
		userIDUint, err = strconv.ParseUint(userID, 10, 64)
	}

	if err != nil {
		controller.HandleError(errs.NewUnauthorizedError("Unauthorized"), c)
		return
	}

	userResponse, err := h.userSrv.GetUserResponseById(uint(userIDUint))
	if err != nil {
		logs.Error(err)
		controller.HandleError(err, c)
		return
	}

	c.JSON(http.StatusOK, userResponse)
}

func (h *userController) UpdateUser(c *gin.Context) {
	updateUserReqBody := request.UpdateUserDTO{}
	if err := c.ShouldBindJSON(&updateUserReqBody); err != nil {
		controller.HandleError(err, c)
		return
	}

	userID, exist := c.Get("user_id")
	if !exist {
		controller.HandleError(errs.NewUnauthorizedError("Unauthorized"), c)
		return
	}

	userIdString := fmt.Sprintf("%v", userID)
	userIDUint, err := strconv.ParseUint(userIdString, 10, 64)
	if err != nil {
		controller.HandleError(errs.NewUnauthorizedError("Unauthorized"), c)
		return
	}

	err = h.userSrv.UpdateUser(uint(userIDUint), updateUserReqBody)
	if err != nil {
		controller.HandleError(err, c)
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "User updated successfully"})
}

// func (h UserController) GetUsers() (any, error) {
// 	return h.UserSrv.Getusers()
// }

// func (h UserController) CreateUser(c *gin.Context) {
// 	h.UserSrv.CreateUser(c)
// }

// func (h UserController) EditProfile(c *gin.Context) {
// 	h.UserSrv.ProfileEdit(c)
// }

// func (h UserController) AddFollow(c *gin.Context) {
// 	h.UserSrv.AddFollow(c)
// }

// func (h UserController) GetClosedFriend(userid string) {
// 	h.UserSrv.GetClosedFriend(userid)
// }

// func (h UserController) SignUp(c *gin.Context) {
// 	h.UserSrv.SignUp(c)
// }

// func (h UserController) SignIn(c *gin.Context) {
// 	h.UserSrv.SignIn(c)
// }

// func (h UserController) SignOut(c *gin.Context) {
// 	h.UserSrv.SignOut(c)
// }
