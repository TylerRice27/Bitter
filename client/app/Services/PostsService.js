import { ProxyState } from "../AppState"




class PostsService {
    async getPosts() {
        let posts = ProxyState.posts
        const res = await api.get('api/posts')
    }

}







export const postsService = new PostsService()
