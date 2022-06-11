// export function getPostForm() {
//     return `
//     <form onsubmit="app.postController.createPosts()">
//           <div class="mb-3">
//             <label for="postTitle" class="m-2 form-label">Title</label>
//             <input type="text" class="form-control" name="postTitle" id="postTitle" aria-describedby="helpId"
//               placeholder="Title" required>


//             <label for="postDescription" class="m-2 form-label">Description</label>
//             <input type="text" class="form-control" name="postDescription" id="postDescription"
//               aria-describedby="helpId" placeholder="Description" required>


//             <label for="postImg" class="m-2 form-label">Media Link</label>
//             <input type="text" class="form-control" name="postImg" id="postImg" aria-describedby="helpId"
//               placeholder="Img/Gif/Video" required>


//           </div>
//           <div class="modal-footer">
//             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//             <button type="button" class="btn btn-danger" onclick="app.postsController.createPosts()">Vent!</button>
//           </div>
//         </form>
    
    
    
    
    
//     `
// }




export function getCommentsForm(){
  return`
  
  <form onsubmit="app.commentsController.createComment()">
        <div class="mb-3">

          <label for="description" class="m-2 form-label">Description</label>
          <input type="text" class="form-control" name="description" id="description" aria-describedby="helpId"
            placeholder="Description" required>


          <button type="submit" class="btn btn-danger m-3">Comment!</button>
        </div>
      </form>

  `
}