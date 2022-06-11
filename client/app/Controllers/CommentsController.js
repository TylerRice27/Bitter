import { ProxyState } from "../AppState.js"
import { getCommentsForm } from "../Forms/Forms.js"
import { commentsService } from "../Services/CommentsService.js"
import { logger } from "../Utils/Logger.js"


function _drawComments() {
    let commentElem = document.getElementById("comment-content")
    let comments = ProxyState.comments
    let template = ''
    comments.forEach(c => { template += c.commentTemplate })
    commentElem.innerHTML = template
}

export class CommentsController {
    constructor() {
        ProxyState.on('comments', _drawComments)
        this.getComments()
    }



    async getComments() {
        try {
            await commentsService.getComments()
        } catch (error) {
            logger.error('[getComments]', error.message)
        }
    }


    async createComment(postId) {
        window.event.preventDefault()
        let form = window.event.target
        let commentData = {
            description: form.description.value,
            postId: postId
        }
        try {
            await commentsService.createComment(commentData)
        } catch (error) {
            logger.log('[createComment]', error.message)
        }
    }

    openCommentOffcanvas(id) {
        const post = ProxyState.posts.find(p => p.id == id)
        // @ts-ignore
        bootstrap.Offcanvas.getOrCreateInstance('#comments-list').show()
        document.getElementById('model-body-slot').innerHTML = post.CommentTemplate
    }

    openMyComments(id) {
        const post = ProxyState.posts.find(p => p.id == id)
        // @ts-ignore
        bootstrap.Offcanvas.getOrCreateInstance('#myComments').show()
        document.getElementById('model-body-slot1').innerHTML = post.currentCommentTemplate
    }

    async deleteComment(id) {
        try {
            await commentsService.deleteComment(id)
        } catch (error) {
            logger.error(error)
        }
    }
}
