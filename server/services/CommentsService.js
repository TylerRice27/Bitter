import { BadRequest, Forbidden } from "@bcwdev/auth0provider/lib/Errors";
import { dbContext } from "../db/DbContext";



class CommentsService{
  
  async getAll(query={}){
    const comments = await dbContext.Comments.find(query)
    return comments
    
  }
  
  async getById(id) {
    const foundComment = await dbContext.Comments.findById(id)
    if (!foundComment) {
    throw new BadRequest('This is the wrong comment get good')
    }
    return foundComment
  }
  async create(body) {
    const newComment = await dbContext.Comments.create(body)
    // await newComment.populate('creator','name picture')
    return newComment
  }

  async remove(id) {
    const original = await dbContext.Comments.findById(id)
    // if(original.creatorId.toString() !== id ){
    //   throw new Forbidden('You aint him bro...You aint him')
    // }
    await original.remove()
    return `deleted ${original.name}`
  }

}
export const commentsService = new CommentsService()