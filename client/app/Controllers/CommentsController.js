import { commentsService } from "../Services/CommentsService.js"
import { logger } from "../Utils/Logger.js"




export class CommentsController {
    constructor() {

    }



    async getComments() {
        try {
            await commentsService.getComments()
        } catch (error) {
            logger.error('[getComments]', error.message)
        }
    }


    async createComment() {
        window.event.preventDefault()
        let form = window.event.target
        let commentData = {
            name: form.name.value,
            description: form.description.value
        }
        try {
            await commentsService.createComment(commentData)
        } catch (error) {
            logger.log('[createComment]', error.message)
        }
    }

    async deleteComment(id) {
        try {
            await commentsService.deleteComment(id)
        } catch (error) {
            logger.error(error)
        }
    }
}