import mongoose from "mongoose";
const Schema = mongoose.Schema



export const PostSchema = new Schema({

  title: {type: String, required: true},
  name: {type: String, required: true},
  description: {type: String, required: true},
  imgUrl:{ type: String, default:'https://www.maxpixel.net/static/photo/2x/Emotions-Smiley-Emotion-Angry-Emoji-Emoticon-Face-5449647.png'}


}, {timestamps: true, toJSON:{virtuals: true}})