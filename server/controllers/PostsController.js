import { postService } from "../services/PostsService";
import BaseController from "../utils/BaseController";




export class PostsController extends BaseController{
  constructor(){
    super('api/posts')
    this.router
    .get('',this.getAll)
    .post('',this.create)
  }
  async getAll(req, res, next) {
    try {
      let posts = await postService.getAll(req.query)
      return res.send(posts)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
   try {
     let post = await postService.create(req.body)
     return res.send(postService)
   } catch (error) {
     next(error)
   }
  }

}