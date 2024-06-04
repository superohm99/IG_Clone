package main

import (
	"igclone/initializers"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
)

func init() {
	initializers.ConnectToDB()
}

var validate *validator.Validate

func main() {
	r := gin.Default()
	r.GET("/ping", func(ctx *gin.Context) {
		ctx.JSON( http.StatusOK , gin.H {
			"message": "pong",
		})
	})

    validate = validator.New()

	r.Run(":8000")
}