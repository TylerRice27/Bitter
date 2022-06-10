import { postsService } from "../services/PostsService";
import BaseController from "../utils/BaseController";




export class PostsController extends BaseController{
  constructor(){
    super('api/posts')
    this.router
    .get('',this.getAll)
    .get('/:id', this.getById)
    .post('',this.create)
    .put('/:id', this.update)
    .delete('/:id', this.remove)
  }
  

  async getAll(req, res, next) {
    try {
      let posts = await postsService.getAll(req.query)
      return res.send(posts)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try{
      let activePost = await postsService.getById(req.params.id)
      return res.send(activePost)
    }
    catch(error){
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let post = await postsService.create(req.body)
      return res.send(post)
    } catch (error) {
      next(error)
    }
  }

  async update(req, res, next) {
    try {
      // req.body.id = req.userInfo.id
      req.body.id = req.param.id
      let updatePost = await postsService.update(req.body)
      return updatePost
    } catch (error) {
      next(error)
    }
  }
  async remove(req, res, next){
    try{
      let post = await postsService.remove(req.params.id)
      return res.send(post)
    }
    catch(error){
      next(error)
    }
  }

}