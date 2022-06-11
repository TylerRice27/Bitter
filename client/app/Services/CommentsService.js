import { ProxyState } from "../AppState.js"
import { Comment } from "../Models/Comment.js"
import { logger } from "../Utils/Logger.js"
import { api } from "./AxiosService.js"




class CommentsService {
    async getComments() {
        const res = await api.get('api/comments')
        logger.log('[Comments]', res.data)
        const comments = res.data.map(c => new Comment(c))
        ProxyState.comments = comments
    }


    async createComment(commentData) {
        const res = await api.post('api/comments', commentData)
        const comment = new Comment(res.data)
        ProxyState.comments = [...ProxyState.comments, comment]
    }


    async deleteComment(id) {
        await api.delete('api/comments/' + id)
        ProxyState.comments = ProxyState.comments.filter(p => p.id !== id)
    }

}







export const commentsService = new CommentsService()
