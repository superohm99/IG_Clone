package authhandler

import (
	"igclone/data/request"
	"igclone/handler"
	"igclone/logs"
	authsrv "igclone/services/auth"
	"net/http"

	"github.com/gin-gonic/gin"
)

type authHandler struct {
	authSrv authsrv.AuthService
}

func NewAuthHandler(authSrv authsrv.AuthService) *authHandler {
	return &authHandler{authSrv: authSrv}
}

func (h *authHandler) Register(ctx *gin.Context) {
	userBodyRequest := request.CreateUserRequest{}

	if err := ctx.ShouldBindJSON(&userBodyRequest); err != nil {
		logs.Error(err)
		handler.HandleError(err, ctx)
		return
	}

	authResponse, err := h.authSrv.Register(userBodyRequest)
	if err != nil {
		handler.HandleError(err, ctx)
		return
	}

	ctx.JSON(http.StatusCreated, authResponse)
}

func (h *authHandler) Login(ctx *gin.Context) {
	loginBodyRequest := request.LoginRequest{}

	if err := ctx.ShouldBindJSON(&loginBodyRequest); err != nil {
		logs.Error(err)
		handler.HandleError(err, ctx)
		return
	}

	authResponse, err := h.authSrv.Login(loginBodyRequest)
	if err != nil {
		handler.HandleError(err, ctx)
		return
	}

	ctx.JSON(http.StatusOK, authResponse)
}
