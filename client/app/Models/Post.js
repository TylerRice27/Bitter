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
        <div class="card text-start">
            <div class="card-header text-center">${this.title}</div>
            <div class="card-body">
              <h4 class="card-title">${this.description}</h4>
              <p class="card-text">${this.imgUrl}</p>
            </div>
          </div>
        `
    }
}