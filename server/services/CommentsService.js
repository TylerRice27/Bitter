import { dbContext } from "../db/DbContext";



class CommentsService{

async getAll(query={}){
const comments = await dbContext.Comment.find(query)
return comments

}


}







export const commentsService = new CommentsService()