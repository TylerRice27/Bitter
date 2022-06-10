import mongoose from "mongoose";
const Schema = mongoose.Schema



export const CommentSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true}
})