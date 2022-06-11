import { BadRequest } from "@bcwdev/auth0provider/lib/Errors"
import { dbContext } from "../db/DbContext"


class PostsService{


  async getAll(query = {}) {
    return await dbContext.Post.find(query)
  }

  async getById(id) {
    const activePost = await dbContext.Post.findById(id)
    if(!activePost){
      throw new BadRequest("invalid id")
    }
    return activePost
  }
  
  async create(body) {
    const newPost =  await dbContext.Post.create(body)
    await newPost.populate('creator', 'name picture')
    return newPost
  }

  async update(update) {
    const original = await this.getById(update.id)
    // if(original.creatorId.toString() !== update.creatorId){
    //   throw new BadRequest('that is bot your post')
    // }


    original.name = update.name || original.name
    original.title = update.title || original.title
    original.description = update.description || original.description
    original.likes = update.likes || original.likes
    original.dislikes = update.dislikes || original.updatePost

    await original.save()
    return original
  }
  
  async remove(id) {
    let original = await dbContext.Post.findById(id)
    await original.remove()
    return `deleted ${original.title}`
  }

}
export const postsService = new PostsService()