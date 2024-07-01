package followhndlr

import (
	"fmt"
	"igclone/errs"
	followsrv "igclone/services/follow"
	"net/http"
	"strconv"
	"github.com/gin-gonic/gin"
)

type followHandler struct {
	followSrv followsrv.FollowService
}

func NewFollowHandler(followSrv followsrv.FollowService) *followHandler {
	return &followHandler{followSrv: followSrv}
}

func (h *followHandler) SendRequestToFollow(ctx *gin.Context) {
	userID, exist := ctx.Get("user_id")
	if !exist {
		ctx.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
		return
	}

	userIdString := fmt.Sprintf("%v", userID)
	userIDUint, err := strconv.ParseUint(userIdString, 10, 64)
	if err != nil {
		ctx.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
		return
	}

	followingUsername := ctx.Param("username")
	if followingUsername == "" {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid username"})
		return
	}

	err = h.followSrv.RequestToFollow(uint(userIDUint), followingUsername)
	if err != nil {
		switch err := err.(type) {
		case *errs.AppError:
			ctx.JSON(err.Code, gin.H{"error": err.Message})
		case error:
			ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		}
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"message": "Send follow request success"})
}

func (h *followHandler) CancelRequestToFollow(ctx *gin.Context) {
	userID, exist := ctx.Get("user_id")
	if !exist {
		ctx.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
		return
	}

	userIdString := fmt.Sprintf("%v", userID)
	userIDUint, err := strconv.ParseUint(userIdString, 10, 64)
	if err != nil {
		ctx.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
		return
	}

	followingUsername := ctx.Param("username")
	if followingUsername == "" {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid username"})
		return
	}

	err = h.followSrv.CancelRequestToFollow(uint(userIDUint), followingUsername)
	if err != nil {
		switch err := err.(type) {
		case *errs.AppError:
			ctx.JSON(err.Code, gin.H{"error": err.Message})
		case error:
			ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		}
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"message": "Cancel follow request success"})
}

func (h *followHandler) AcceptRequestToFollow(ctx *gin.Context) {
	userID, exist := ctx.Get("user_id")
	if !exist {
		ctx.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
		return
	}

	userIdString := fmt.Sprintf("%v", userID)
	userIDUint, err := strconv.ParseUint(userIdString, 10, 64)
	if err != nil {
		ctx.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
		return
	}

	followerUsername := ctx.Param("username")
	if followerUsername == "" {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid username"})
		return
	}

	err = h.followSrv.AcceptRequest(uint(userIDUint), followerUsername)
	if err != nil {
		switch err := err.(type) {
		case *errs.AppError:
			ctx.JSON(err.Code, gin.H{"error": err.Message})
		case error:
			ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		}
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"message": "Accept follow request success"})
}

func (h *followHandler) RejectRequestToFollow(ctx *gin.Context) {
	userID, exist := ctx.Get("user_id")
	if !exist {
		ctx.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
		return
	}

	userIdString := fmt.Sprintf("%v", userID)
	userIDUint, err := strconv.ParseUint(userIdString, 10, 64)
	if err != nil {
		ctx.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
		return
	}

	followerUsername := ctx.Param("username")
	if followerUsername == "" {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid username"})
		return
	}

	err = h.followSrv.RejectRequest(uint(userIDUint), followerUsername)
	if err != nil {
		switch err := err.(type) {
		case *errs.AppError:
			ctx.JSON(err.Code, gin.H{"error": err.Message})
		case error:
			ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		}
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"message": "Reject follow request success"})
}

func (h *followHandler) GetFollowing(ctx *gin.Context) {
	username := ctx.Param("username")
	fmt.Println("|", username, "|")
	if username == "" {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid username"})
		return
	}

	users, err := h.followSrv.GetFollowings(username)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, users)
}

func (h *followHandler) GetFollowers(ctx *gin.Context) {
	username := ctx.Param("username")
	if username == "" {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid username"})
		return
	}

	users, err := h.followSrv.GetFollowers(username)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, users)
}

func (h *followHandler) GetRequest(ctx *gin.Context) {
	user_id, exist := ctx.Get("user_id")
	if !exist {
		ctx.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
		return
	}

	userIDString := fmt.Sprintf("%v", user_id)
	userIDUint, err := strconv.ParseUint(userIDString, 10, 64)
	if err != nil {
		ctx.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
		return
	}

	users, err := h.followSrv.GetRequest(uint(userIDUint))
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, users)
}

func (h *followHandler) Unfollower(ctx *gin.Context) {
	userID, exist := ctx.Get("user_id")
	if !exist {
		ctx.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
		return
	}

	userIdString := fmt.Sprintf("%v", userID)
	userIDUint, err := strconv.ParseUint(userIdString, 10, 64)
	if err != nil {
		ctx.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
		return
	}

	followingUsername := ctx.Param("username")
	if followingUsername == "" {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid username"})
		return
	}

	err = h.followSrv.RemoveFollower(uint(userIDUint), followingUsername)
	if err != nil {
		switch err := err.(type) {
		case *errs.AppError:
			ctx.JSON(err.Code, gin.H{"error": err.Message})
		case error:
			ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		}
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"message": "Unfollow success"})
}

func (h *followHandler) Unfollowing(ctx *gin.Context) {
	userID, exist := ctx.Get("user_id")
	if !exist {
		ctx.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
		return
	}

	userIdString := fmt.Sprintf("%v", userID)
	userIDUint, err := strconv.ParseUint(userIdString, 10, 64)
	if err != nil {
		ctx.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
		return
	}

	followerUsername := ctx.Param("username")
	if followerUsername == "" {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid username"})
		return
	}

	err = h.followSrv.RemoveFollowing(uint(userIDUint), followerUsername)
	if err != nil {
		switch err := err.(type) {
		case *errs.AppError:
			ctx.JSON(err.Code, gin.H{"error": err.Message})
		case error:
			ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		}
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"message": "Unfollow success"})
}
