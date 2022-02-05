import mongoos from "mongoose";

const postSchema = mongoos.Schema({
  title: String,
  message: String,
  creator: String,
  tags: String,
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoos.model("PostMessage", postSchema);

export default PostMessage;
