package handler

import (
	"igclone/errs"
	"net/http"

	"github.com/gin-gonic/gin"
)

func HandleError(err error, ctx *gin.Context) {
	switch e := err.(type) {
	case *errs.AppError:
		ctx.JSON(e.Code, gin.H{"error": e.Message})
	default:
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "An unexpected error occurred"})
	}
}
