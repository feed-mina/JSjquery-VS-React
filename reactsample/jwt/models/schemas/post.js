const { Schema } = require('mongoose');
const shortId = require('./types/short-id');
const CommentSchema = require('./comment');

const PostSchema = new Schema({
  shortId,
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    // index 추가하기
    index:true,
  },
    // comments 필드 선언
comments: [CommentSchema],
}, {
  timestamps: true,
});

module.exports = PostSchema;