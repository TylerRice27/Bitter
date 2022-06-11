import { ProxyState } from "../AppState.js";
import { postsService } from "../Services/PostsService.js";
import { logger } from "../Utils/Logger.js";


function _drawPosts() {
    let postElem = document.getElementById("posts-content")
    let posts = ProxyState.posts
    let template = ''
    posts.forEach(p => { template += p.DataTemplate })
    postElem.innerHTML = template
    document.body.style.backgroundImage = `url(https://media.istockphoto.com/vectors/abstract-red-orange-polygonal-vector-background-vector-id990855930?k=20&m=990855930&s=612x612&w=0&h=UBepOh9T2xoWUL58LsmbERU_ZRKIIhUU0-JE0DbBjRU=)`
}



// function _drawactivePost() {
//     const post = ProxyState.activePosts

// }

export class PostsController {
    constructor() {
        ProxyState.on('posts', _drawPosts)
        this.getPosts()
    }

    async getPosts() {
        try {
            await postsService.getPosts()
        } catch (error) {
            logger.error('[getPosts]', error.message)
        }
    }

    activePost(id) {
        try {
            postsService.activePost(id)
        } catch (error) {
            logger.error("[activePost]", error)
        }
    }



    async createPosts() {
        window.event.preventDefault()
        let form = window.event.target
        let postData = {
            title: form.title.value,
            description: form.description.value
        }
        try {
            await postsService.createPosts(postData)
        } catch (error) {
            logger.log('[createPost]', error.message)
        }
    }



    async deletePost(id) {
        try {
            await postsService.deletePost(id)
        } catch (error) {
            logger.error(error)
        }
    }




}

