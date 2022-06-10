import { postsService } from "../Services/PostsService";
import { logger } from "../Utils/Logger";



export class PostsController {
    constructor() {

    }

    async getPosts() {
        try {
            await postsService.getPosts()
        } catch (error) {
            logger.error('[getPosts]', error.message)
        }

    }


}

