export class Post {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.name = data.name
    this.description = data.description
    this.imgUrl = data.imgUrl
  }

  get DataTemplate() {
    return `
        <div class="card custom-card bg-black text-start text-light p-4 m-3">
            <p class="text-end m-0" onclick="app.postsController.deletePost('${this.id}')"><span class="selectable">❌</span></p>
            <div class="card-header text-center text-uppercase p-0"><h3>${this.title}</h3></div>
            <div class="card-body d-flex flex-row">
            <img class="img-fluid object-fit" style="max-height: 125px" src="${this.imgUrl}" alt="">
              <p card-title">${this.description}</p>
            </div>
            <div class="d-flex flex-row justify-content-center justify-content-around">
            <i class="mdi mdi-thumb-up-outline" onclick="app.postsController.createLike('${this.id}', true)"><span id="likes"></span></i>
            <i class="mdi mdi-thumb-down-outline" onclick="app.postsController.createLike('${this.id}', false)"><span id="dislikes"></span></i>
            <i class="mdi mdi-comment-plus-outline" onclick="app.commentsController.openCommentOffcanvas('${this.id}')" type="button" data-bs-toggle="offcanvas"
data-bs-target="#comments-list"><span id="comments"></span></i>
            <i class="mdi mdi-newspaper" onclick="app.commentsController.openMyComments('${this.id}')" type="button" data-bs-toggle="offcanvas"
data-bs-target="#myComments"><span id="comments"></i>

            </div>
          </div>
        `
  }




  get CommentTemplate() {
    return `
    <div class="offcanvas-body d-flex flex-column justify-content-between">
      <form onsubmit="app.commentsController.createComment('${this.id}')">
        <div class="mb-3">
          <label for="description" class="m-2 form-label">Constructively Criticize!</label>
          <input type="text" class="form-control" name="description" id="description" aria-describedby="helpId"
            placeholder="Comment" required>
          <button type="submit" class="btn btn-danger m-3">let er rip!</button>
        </div>
      </form>
    </div>
    `
  }

  get currentCommentTemplate() {
    return `
        <div class="card text-start">
            <div class="card-body">
                <p class="card-text">${this.description}</p>
                <p onclick="app.commentsController.deleteComment('${this.id}')">❌</p>
            </div>
        </div>
        `
  }
}

