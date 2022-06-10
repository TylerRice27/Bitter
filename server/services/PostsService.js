import { dbContext } from "../db/DbContext"


class PostsService{

  async getAll(query = {}) {
    return await dbContext.Post.find(query)
  }
  
  async create(body) {
    return await dbContext.Post.create(body)
  }
  
  async remove(id) {
    let original = await dbContext.Post.findById(id)
    await original.remove()
    return `deleted ${original.title}`
  }

}
export const postsService = new PostsService()