package main

import (
	"fmt"
	authhndlr "igclone/handler/auth"
	followhndlr "igclone/handler/follow"
	notehndlr "igclone/handler/note"
	"igclone/initializers"
	"igclone/logs"

	// "igclone/middleware"
	followrepo "igclone/repository/follow"
	noterepo "igclone/repository/note"

	notirepo "igclone/repository/notification"
	user_repository "igclone/repository/user"
	authsrv "igclone/services/auth"
	followsrv "igclone/services/follow"
	jwtsrv "igclone/services/jwt"
	notesrv "igclone/services/note"
	notisrv "igclone/services/notification"
	user_service "igclone/services/user"

	// "net/http"

	// "github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

var db *gorm.DB

func init() {
	db = initializers.ConnectToDB()
	// db.AutoMigrate(&models.Notification{})
}

func main() {

	userRepo := user_repository.NewUserRepository(db)
	userSrv := user_service.NewUserService(userRepo)

	jwtSrv := jwtsrv.NewJWTService(userSrv)
	authSrv := authsrv.NewAuthService(jwtSrv, userSrv)
	authHandler := authhndlr.NewAuthHandler(authSrv)

	noteRepo := noterepo.NewNoteRepository(db)
	noteSrv := notesrv.NewNoteService(noteRepo, userSrv)
	noteHandler := notehndlr.NewNoteHandler(noteSrv)

	notiRepo := notirepo.NewNotificationRepository(db)
	notiSrv := notisrv.NewNotificationService(notiRepo, userSrv)

	followRepo := followrepo.NewFollowRepository(db)
	followSrv := followsrv.NewFollowService(followRepo, userSrv, notiSrv)
	followHandler := followhndlr.NewFollowHandler(followSrv)

	_ = followHandler
	_ = noteHandler
	_ = authHandler


	noti, err := notiSrv.GetNotifications(2)
	if err != nil {
		logs.Error(err)
		return
	}
	fmt.Println(noti)

	// r := gin.Default()
	// r.GET("/ping", func(ctx *gin.Context) {
	// 	ctx.JSON( http.StatusOK , gin.H {
	// 		"message": "pong",
	// 	})
	// })

	// a_router := r.Group("/api/auth")
	// {
	// 	a_router.POST("/register", authHandler.Register)
	// 	a_router.POST("/login", authHandler.Login)
	// }

	// n_router := r.Group("/api/note")
	// {
	// 	n_router.GET("/all", middleware.VerifyToken(), noteHandler.GetLatestNotes)
	// 	n_router.GET("/self", middleware.VerifyToken(), noteHandler.GetLatestNoteByUserID)
	// 	n_router.POST("/create", middleware.VerifyToken(), noteHandler.CreateNote)
	// 	n_router.DELETE("/delete/:id", middleware.VerifyToken(), noteHandler.DeleteNote)
	// }

	// f_router := r.Group("/api/follow")
	// {
	// f_router.POST("/send-request/:username", middleware.VerifyToken(), followHandler.SendRequestToFollow)
	// f_router.POST("/cancel-request/:username", middleware.VerifyToken(), followHandler.CancelRequestToFollow)
	// f_router.POST("/accept-request/:username", middleware.VerifyToken(), followHandler.AcceptRequestToFollow)
	// f_router.POST("/reject-request/:username", middleware.VerifyToken(), followHandler.RejectRequestToFollow)
	// f_router.GET("/following/:username", middleware.VerifyToken(), followHandler.GetFollowing)
	// f_router.GET("/followers/:username", middleware.VerifyToken(), followHandler.GetFollowers)
	// f_router.DELETE("/unfollowing/:username", middleware.VerifyToken(), followHandler.Unfollowing)
	// f_router.DELETE("/unfollower/:username", middleware.VerifyToken(), followHandler.Unfollower)
	// f_router.GET("/request", middleware.VerifyToken(), followHandler.GetRequest)
	// }

	// r.Run(":8000")
}
