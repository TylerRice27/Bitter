import { BadRequest } from "@bcwdev/auth0provider/lib/Errors";
import { dbContext } from "../db/DbContext";



class CommentsService{
  
  async getAll(query={}){
    const comments = await dbContext.Comment.find(query)
    return comments
    
  }
  
  async getById(id) {
    const foundComment = await dbContext.Comment.findById(id)
    if (!foundComment) {
    throw new BadRequest('This is the wrong comment get good')
    }
    return foundComment
  }
  async create(body) {
    const newComment = await dbContext.Comment.create(body)
    // await newComment.populate('creator','name picture')
    return newComment
  }

  // async remove(id) {
  //   const original = await this.
  // }

}







export const commentsService = new CommentsService()