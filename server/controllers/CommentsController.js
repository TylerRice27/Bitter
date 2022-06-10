import BaseController from '../utils/BaseController'

export class CommentsController extends BaseController {
  constructor(){
    super('api/comments')
    this.router
      .get('', this.getAll)
      .post('', this.create)
      .delete('/:id', this.remove)
  }
} 