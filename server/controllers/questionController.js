const ObjectId = require('mongodb').ObjectId
const QuestionModel = require('../models/questionModel')

class Question {
  static create (req, res) {
    // console.log(req.body);
    let question = new QuestionModel({
      questioner: req.body.questioner,
      title: req.body.title,
      question: req.body.question,
      tags: req.body.tags
    })
    // console.log(question);
    question.save()
    .then(question => res.send(question))
    .catch(err => res.status(500).send(err))
  }

  static getAll (req, res) {
    QuestionModel.find().populate('questioner')
    .then(questions => res.send(questions))
    .catch(err => res.status(500).send(err))
  }

  static getById (req, res) {
    let id = {_id: ObjectId(req.params.id)}

    QuestionModel.findById(id)
    .then(question => res.send(question))
    .catch(err => res.status(500).send(err))
  }

  static update (req, res) {
    let id = {_id: ObjectId(req.params.id)}

    QuestionModel.findById(id)
    .then(question => {
      question.title = req.body.title || question.title,
      question.question = req.body.question || question.question,
      question.tags = req.body.tags || question.tags,
      question.updatedAt = new Date()
      // console.log(question);
      question.save()
      .then(question => res.send(question))
      .catch(err => res.status(500).send(err))
    })
    .catch(err => res.status(500).send(err))
  }

  static remove (req, res) {
    let id = {_id: ObjectId(req.params.id)}

    QuestionModel.findByIdAndRemove(id)
    .then(question => res.send(question))
    .catch(err => res.status(500).send(err))
  }
}

module.exports = Question;