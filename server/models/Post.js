import mongoose from "mongoose";
const Schema = mongoose.Schema

const ObjectId = Schema.Types.ObjectId

export const PostSchema = new Schema({

  title: {type: String, required: true},
  name: {type: String,default:'user 123'},
  description: {type: String, required: true},
  likes:{type: Number, default: 0},
  dislikes:{type:Number, default: 0},
  imgUrl:{ type: String, default:'https://www.maxpixel.net/static/photo/2x/Emotions-Smiley-Emotion-Angry-Emoji-Emoticon-Face-5449647.png'},
  creatorId:{type: ObjectId, ref: 'Accounts'}
}, {timestamps: true, toJSON:{virtuals: true}})


PostSchema.virtual('creator',{
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})