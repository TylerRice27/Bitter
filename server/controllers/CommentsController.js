import { Auth0Provider } from "@bcwdev/auth0provider"
import { commentsService } from "../services/CommentsService"
import BaseController from '../utils/BaseController'

export class CommentsController extends BaseController {
  constructor() {
    super('api/comments')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .delete('/:id', this.remove)
  }

  async getAll(req, res, next) {
    try {

      const comments = await commentsService.getAll(req.query)
      return res.send(comments)
    } catch (error) {
      next(error)
    }

  }

  async getById(req, res, next) {
    try {
      const foundComment = await commentsService.getById(req.params.id)
      return res.send(foundComment)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {

    try {
      req.body.creatorId = req.userInfo.id
      const newComment = await commentsService.create(req.body)
      return res.send(newComment)
    }
    catch (error) {
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      const commentRemoved = await commentsService.remove(req.params.id)
      return res.send(commentRemoved)
    } catch (error) {
      next(error)
    }
  }
}

