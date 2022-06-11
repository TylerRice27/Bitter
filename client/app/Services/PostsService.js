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


    async createPosts(postData) {
        const res = await api.post('api/posts', postData)
        const post = new Post(res.data)
        ProxyState.posts = [...ProxyState.posts, post]
    }

    activePost(id) {
        const found = ProxyState.posts.find(p => p.id === id)
        if (!found) {
            throw new Error('invalid post id')
        }
        ProxyState.activePosts = found
    }

    async deletePost(id) {
        await api.delete('api/posts/' + id)
        ProxyState.posts = ProxyState.posts.filter(p => p.id !== id)
    }
}





export const postsService = new PostsService()
