package controller

import (
	"igclone/errs"
	"net/http"

	"github.com/gin-gonic/gin"
)

func HandleError(err error, c *gin.Context) {
	switch e := err.(type) {
	case *errs.AppError:
		c.JSON(e.Code, gin.H{"error": e.Message})
	default:
		c.JSON(http.StatusInternalServerError, gin.H{"error": "An unexpected error occurred"})
	}
}
