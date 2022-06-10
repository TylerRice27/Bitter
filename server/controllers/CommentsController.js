import { commentsService } from "../services/CommentsService"
import BaseController from '../utils/BaseController'

export class CommentsController extends BaseController {
  constructor(){
    super('api/comments')
    this.router
      .get('', this.getAll)
      .post('', this.create)
      // .delete('/:id', this.remove)
  }
  async getAll(req, res, next) {
    try {
      
      const comments = await commentsService.getAll(req.query)
      return res.send(comments)
    } catch (error) {
      next(error)
    }
    
    
    create(req, res, next) {
      throw new Error("Method not implemented.")
    }
  }
  

} 