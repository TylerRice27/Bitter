import mongoose from "mongoose";
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId


export const CommentSchema = new Schema({

  description: { type: String, required: true },
  postId: { type: ObjectId, ref: 'Post' },
  creatorId: { type: ObjectId, ref: "Account" }
},
  { timestamps: true, toJSON: { virtuals: true } }
)

CommentSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})