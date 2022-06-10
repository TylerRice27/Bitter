import { ProxyState } from "../AppState.js"
import { Post } from "../Models/Post.js"
import { logger } from "../Utils/Logger.js"
import { api } from "./AxiosService.js"




class PostsService {
    async getPosts() {
        const res = await api.get('api/posts')
        logger.log('[Posts]', res.data)
        const posts = res.data.map(p => new Post(p))
        ProxyState.posts = posts
    }


    async createPosts(newPost) {
        const res = await api.post('api/posts', newPost)
        const post = new Post(res.data)
        ProxyState.posts = [...ProxyState.posts, post]
    }

}







export const postsService = new PostsService()
