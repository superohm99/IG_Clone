package notehndlr

import (
	"fmt"
	"igclone/data/request"
	"igclone/data/response"
	"igclone/errs"
	"igclone/handler"
	"igclone/logs"
	notesrv "igclone/services/note"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type noteHandler struct {
	noteSrv notesrv.NoteService
}

func NewNoteHandler(noteSrv notesrv.NoteService) *noteHandler {
	return &noteHandler{noteSrv}
}

func (h *noteHandler) CreateNote(ctx *gin.Context) {
	noteRequestBody := request.CreateNoteRequest{}
	if err := ctx.ShouldBindJSON(&noteRequestBody); err != nil {
		logs.Error(err)
		handler.HandleError(err, ctx)
		return
	}

	userID, exists := ctx.Get("user_id")
	if !exists {
		logs.Error(errs.NewUnauthorizedError("Unauthorized"))
		handler.HandleError(errs.NewUnauthorizedError("Unauthorized"), ctx)
		return
	}

	userIdString := fmt.Sprintf("%v", userID)
	userIDUint, err := strconv.ParseUint(userIdString, 10, 64)
	if err != nil {
		logs.Error(errs.NewUnauthorizedError("Unauthorized"))
		handler.HandleError(errs.NewUnauthorizedError("Unauthorized"), ctx)
		return
	}

	noteResponse, err := h.noteSrv.CreateNote(noteRequestBody, uint(userIDUint))
	if err != nil {
		handler.HandleError(err, ctx)
		return
	}

	ctx.JSON(http.StatusCreated, noteResponse)
}

func (h *noteHandler) GetLatestNotes(ctx *gin.Context) {
	userID, exist := ctx.Get("user_id")
	if !exist {
		logs.Error(errs.NewUnauthorizedError("Unauthorized"))
		handler.HandleError(errs.NewUnauthorizedError("Unauthorized"), ctx)
		return
	}

	userIdString := fmt.Sprintf("%v", userID)
	userIdUint, err := strconv.ParseUint(userIdString, 10, 64)
	if err != nil {
		logs.Error(errs.NewUnauthorizedError("Unauthorized"))
		handler.HandleError(errs.NewUnauthorizedError("Unauthorized"), ctx)
		return
	}

	notesResponse, err := h.noteSrv.GetLatestNotes(uint(userIdUint))
	if err != nil {
		handler.HandleError(err, ctx)
		return
	}

	ctx.JSON(http.StatusOK, notesResponse)

}

func (h *noteHandler) GetLatestNoteByUserID(ctx *gin.Context) {
	userID, exist := ctx.Get("user_id")
	if !exist {
		logs.Error(errs.NewUnauthorizedError("Unauthorized"))
		handler.HandleError(errs.NewUnauthorizedError("Unauthorized"), ctx)
		return
	}

	userIdString := fmt.Sprintf("%v", userID)
	userIDUint, err := strconv.ParseUint(userIdString, 10, 64)

	if err != nil {
		logs.Error(errs.NewUnauthorizedError("Unauthorized"))
		handler.HandleError(errs.NewUnauthorizedError("Unauthorized"), ctx)
		return
	}

	noteResponse, err := h.noteSrv.GetLatestNoteByUserID(uint(userIDUint))
	if err != nil {
		logs.Error(err)
		ctx.JSON(http.StatusOK, response.NoteResponse{})
		return
	}

	ctx.JSON(http.StatusOK, noteResponse)
}

func (h *noteHandler) DeleteNote(ctx *gin.Context) {
	id := ctx.Param("id")
	idUint, err := strconv.ParseUint(id, 10, 64)
	if err != nil {
		logs.Error(err)
		handler.HandleError(err, ctx)
		return
	}

	userID, exist := ctx.Get("user_id")
	if !exist {
		logs.Error(errs.NewUnauthorizedError("Unauthorized"))
		handler.HandleError(errs.NewUnauthorizedError("Unauthorized"), ctx)
		return
	}

	userIdString := fmt.Sprintf("%v", userID)
	userIDUint, err := strconv.ParseUint(userIdString, 10, 64)
	if err != nil {
		logs.Error(errs.NewUnauthorizedError("Unauthorized"))
		handler.HandleError(errs.NewUnauthorizedError("Unauthorized"), ctx)
		return
	}

	err = h.noteSrv.DeleteNoteByID(uint(idUint), uint(userIDUint))

	if err != nil {
		logs.Error(err)
		handler.HandleError(err, ctx)
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"message": "delete successfully"})
}
