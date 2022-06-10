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
        <div class="card bg-dark text-start p-4 m-3">
            <div class="card-header text-center">${this.title}</div>
            <div class="card-body">
              <h4 card-title">${this.description}</h4>
              <img class="img-fluid object-fit" style="max-height: 125px" src="${this.imgUrl}" alt="">
            </div>
          </div>
        `
    }
}