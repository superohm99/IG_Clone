package auth

import (
	"fmt"
	"igclone/controller"
	"igclone/data/request"
	"igclone/errs"
	service_auth "igclone/services/auth"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type authController struct {
	authSrv service_auth.AuthService
}

func NewAuthController(authSrv service_auth.AuthService) *authController {
	return &authController{authSrv: authSrv}
}

func (h *authController) Login(c *gin.Context) {
	loginReqBody := request.LoginRequest{}
	if err := c.ShouldBindJSON(&loginReqBody); err != nil {
		controller.HandleError(err, c)
		return
	}

	authResponse, err := h.authSrv.Login(loginReqBody)
	if err != nil {
		controller.HandleError(err, c)
		return
	}

	c.JSON(http.StatusOK, authResponse)
}

func (h *authController) Register(c *gin.Context) {
	createUserReqBody := request.CreateUserRequest{}
	if err := c.ShouldBindJSON(&createUserReqBody); err != nil {
		controller.HandleError(err, c)
		return
	}

	authResponse, err := h.authSrv.Register(createUserReqBody)
	if err != nil {
		controller.HandleError(err, c)
		return
	}

	c.JSON(http.StatusOK, authResponse)
}

func (h *authController) Logout(c *gin.Context) {
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

	err = h.authSrv.Logout(uint(userIDUint))
	if err != nil {
		controller.HandleError(err, c)
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Logout successfully"})
}
