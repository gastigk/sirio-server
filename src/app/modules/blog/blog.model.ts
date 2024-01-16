import { model, Schema } from "mongoose";
import { BlogDataType, CommentType } from "./blog.interface";

const blogScema = new Schema<BlogDataType>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  blogDetails: {
    type: String,
    required: true,
    trim: true,
  },
  img: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  commentsArray: {
    type: [Number],
    required: true,
    trim: true,
  },
  authorEmail: {
    type: String,
    required: true,
    trim: true,
  },
  comment: {
    type: Number,
    required: true,
    trim: true,
  },
});

const commentSchema = new Schema<CommentType>({
  date: { type: String, required: true },
  comment: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  postId: { type: String, required: true },
  img: { type: String, trim: true },
  title: { type: String, trim: true },
});

export const Blog = model<BlogDataType>("Blog", blogScema);
export const Comment = model<CommentType>("Comment", commentSchema);
