package main

import (
	controller_auth "igclone/controller/auth"
	controller_user "igclone/controller/user"
	"igclone/initializers"
	"igclone/middleware"
	repository_user "igclone/repository/user"
	service_auth "igclone/services/auth"
	service_jwt "igclone/services/jwt"
	service_user "igclone/services/user"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type Message struct {
	Text string `json:"text"`
}

func init() {
	initializers.ConnectToDB()
}

func main() {
	userRepository := repository_user.NewUserRepositoryDB(initializers.DB)
	userService := service_user.NewUserService(userRepository)
	userController := controller_user.NewUserController(userService)

	jwtService := service_jwt.NewJWTService()
	authService := service_auth.NewAuthService(jwtService, userService)
	authController := controller_auth.NewAuthController(authService)

	// postRepository := repository_post.NewPostRepositoryDB(initializers.DB)
	// postService := services_post.NewPostService(postRepository)
	// postController := controller_post.NewPostController(postService)

	// storyRepository := repository_story.NewStoryRepositoryDB(initializers.DB)
	// storyService := services_story.NewStoryService(storyRepository)
	// storyController := controller_story.NewStoryController(storyService)

	// chatRepository := repository_chat.NewChatRepositoryDB(initializers.DB)
	// chatService := services_chat.NewChatService(chatRepository)
	// chatController := controller_chat.NewChatController(chatService)

	// reelRepository := repository_reel.NewReelRepositoryDB(initializers.DB)
	// reelService := services_reel.NewReelService(reelRepository)
	// reelController := controller_reel.NewReelController(reelService)

	r := gin.Default()
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:8081"} // Add your React Native app's origin
	config.AllowMethods = []string{"GET", "POST", "OPTIONS"}
	r.Use(cors.New(config))

	a_router := r.Group("api/auth/")
	{
		a_router.POST("/login", authController.Login)
		a_router.POST("/register", authController.Register)
		a_router.POST("/logout", middleware.RequireAuth(), authController.Logout)
	}

	u_router := r.Group("api/user/")
	{
		u_router.GET("/self", middleware.RequireAuth(), userController.GetUserById)
		u_router.GET("/:id", middleware.RequireAuth(), userController.GetUserById)
		u_router.POST("/update", middleware.RequireAuth(), userController.UpdateUser)
		u_router.DELETE("/delete", middleware.RequireAuth(), userController.DeleteUser)
	}

	// p_router := r.Group("api/p_router/")
	// {
	// 	p_router.POST("/create_post", func(c *gin.Context) {
	// 		postController.PostCreate(c)
	// 	})

	// 	p_router.GET("/posts", func(c *gin.Context) {
	// 		postController.Posts()
	// 	})

	// 	p_router.POST("/send_comment", func(c *gin.Context) {
	// 		postController.CommentCreate(c)
	// 	})

	// 	p_router.POST("/send_reply", func(c *gin.Context) {
	// 		postController.ReplyCreate(c)
	// 	})
	// }

	// s_router := r.Group("api/story/")
	// {
	// 	s_router.POST("/create", middleware.RequireAuth(), func(c *gin.Context) {
	// 		storyController.AddStory(c)
	// 	})

	// 	s_router.GET("/all", func(c *gin.Context) {
	// 		storyController.Stories(c)
	// 	})

	// 	s_router.GET("/:id", middleware.RequireAuth(), func(c *gin.Context) {
	// 		userId := c.Param("id")
	// 		storyController.StoriesByUserId(userId)
	// 	})

	// 	s_router.GET("/following", middleware.RequireAuth(), func(c *gin.Context) {
	// 		storyController.FollowingStories(c)
	// 	})
	// }

	// c_router := r.Group("api/c_router/")
	// {
	// 	c_router.POST("/create_chat", func(c *gin.Context) {
	// 		chatController.ChatCreate(c)
	// 	})

	// 	c_router.POST("send_message", func(c *gin.Context) {
	// 		chatController.MessageCreate(c)
	// 	})

	// 	c_router.GET("get_message/:chatId", func(c *gin.Context) {
	// 		chatId := c.Param("chatId")
	// 		chatController.GetMessage(chatId)
	// 	})
	// }

	// r_router := r.Group("api/reel/")
	// {
	// 	r_router.POST("/create", middleware.RequireAuth(), func(c *gin.Context) {
	// 		reelController.AddReel(c)
	// 	})

	// 	r_router.POST("/send_comment", middleware.RequireAuth(), func(c *gin.Context) {
	// 		reelController.AddComment(c)
	// 	})

	// 	r_router.GET("/all", func(c *gin.Context) {
	// 		reelController.Reels()
	// 	})

	// 	r_router.GET("/:id", middleware.RequireAuth(), func(c *gin.Context) {
	// 		userId := c.Param("id")
	// 		reelController.ReelsByUserId(userId)
	// 	})

	// 	r_router.GET("/following", middleware.RequireAuth(), func(c *gin.Context) {
	// 		reelController.FollowingReels(c)
	// 	})
	// }

	r.Run(":8000")

	// u_router := r.Group("api/u_router/")
	// {
	// 	UserRepository := repository_user.NewUserRepositoryDB(initializers.DB)
	// 	UserService := services_user.NewUserService(UserRepository)
	// 	UserController := controller_user.NewUserController(UserService)

	// 	u_router.GET("/users", func(c *gin.Context) {
	// 		res, err := UserController.GetUsers()
	// 		fmt.Print(err)
	// 		c.JSON(http.StatusOK, res)
	// 	})

	// 	u_router.POST("/create_user", func(c *gin.Context) {
	// 		UserController.CreateUser(c)
	// 	})

	// 	u_router.POST("/edit_profile", func(c *gin.Context) {
	// 		UserController.EditProfile(c)
	// 	})

	// 	u_router.POST("/add_follow", func(c *gin.Context) {
	// 		UserController.AddFollow(c)
	// 	})

	// 	u_router.POST("/get_closedfreind/:userid", func(c *gin.Context) {
	// 		userid := c.Param("userid")
	// 		UserController.GetClosedFriend(userid)
	// 	})
	// }
}
