import { dbContext } from "../db/DbContext"


class PostsService{
  async getAll(query = {}) {
    return await dbContext.Post.find(query)
  }
  
  async create(body) {
    return await dbContext.Post.create(body)
  }
}
export const postService = new PostsService()