import { ProxyState } from "../AppState.js";
import { postsService } from "../Services/PostsService.js";
import { logger } from "../Utils/Logger.js";


function _drawPosts() {
    const postElem = document.getElementById("posts-content")
    const posts = ProxyState.posts
    let template = ''
    posts.forEach(p => { template += p.DataTemplate })
    postElem.innerHTML = template

}



// function _drawactivePost() {
//     const post = ProxyState.activePosts

// }

export class PostsController {
    constructor() {
        ProxyState.on('posts', _drawPosts)
    }

    async getPosts() {
        try {
            await postsService.getPosts()
        } catch (error) {
            logger.error('[getPosts]', error.message)
        }

    }

    async createPosts() {
        window.event.preventDefault()
        try {
            const form = window.event.target
            const newPost = {
                title: form.postTitle.value,
                description: form.postDescription.value

            }
            await postsService.createPosts(newPost)
        } catch (error) {
            logger.log('[createPost]', error.message)
        } finally {
            bootstrap.Modal.getOrCreateInstance('#form-modal').hide()
        }
    }




}

