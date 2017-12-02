// require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/hacktivoverflow')
const Schema = mongoose.Schema

const questionSchema = new Schema({
  questioner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
      type: String
  },
  question: {
      type: String
  },
  tags: [{
    type: String,
    default: []
  }],
  // vote: [{
  //     voter: [{
  //       type: Schema.Types.ObjectId,
  //       ref: 'User'
  //     }]
  // }],
  isClosed: {
      type: Boolean,
      default: false
  },
  closedAt: {
      type: Date,
      default: null
  },
  createdAt: {
      type: Date,
      default: Date.now
  },
  updatedAt: {
      type: Date,
      default: null
  }
})

const Question = mongoose.model('Question', questionSchema);
module.exports = Question