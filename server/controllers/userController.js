const ObjectId = require('mongodb').ObjectID
const UserModel = require('../models/userModel')
const jwt = require('../helpers/jwt')

class User {
  static create (req, res) {
    UserModel.findOne({facebookId: req.body.id})
    .then(user => {
      if(user) {
        jwt.sign(user)
        .then(token => {
          res.send({
            token: token,
            id: user.id
          })
        })
        .catch(err => res.status(500).send(err))
      } else {
        let newUser = new UserModel({
          facebookId: req.body.id,
          name: req.body.name,
          gender: req.body.gender,
          picture: req.body.picture.data.url,
          email: req.body.email,
          isAdmin: req.body.isAdmin
        })

        newUser.save()
        .then(user => {
          jwt.sign(user)
          .then(token => {
            res.send({
              token: token,
              id: user.id
            })
          })
          .catch(err => {
            console.log(err)
          })
        })
        .catch(err => {
          res.status(500).send(err)
        })
      }
    })
    .catch(err => {
      console.log('masuk error', err)
    })
  }

  static getAll (req, res) {
    UserModel.find()
    .then(users => {
      res.send(users)
    })
    .catch(err => res.status(500).send(err))
  }

  static getById (req, res) {
    let id = {_id: ObjectId(req.params.id)}

    UserModel.findById(id)
    .then(user => {
      res.send(user)
    })
    .catch(err => res.status(500).send(err))
  }

  static getOne (req, res) {
    UserModel.findOne({name: req.body.name})
    .then(user => {
      res.send(user)
    })
    .catch(err => res.status(500).send(err))
  }

  static update (req, res) {
    let id = {_id: ObjectId(req.params.id)}

    UserModel.findById(id)
    .then(user => {
      user.name = req.body.name || user.name,
      user.gender = req.body.gender || user.gender,
      user.picture = req.body.picture || user.picture,
      user.email = req.body.email || user.email,
      user.isAdmin = req.body.isAdmin || user.isAdmin
      user.updatedAt = new Date()

      user.save()
      .then(user => res.send(user))
      .catch(err => res.status(500).send(err))
    })
    .catch(err => res.status(500).send(err))
  }

  static remove (req, res) {
    let id = {_id: ObjectId(req.params.id)}

    UserModel.findByIdAndRemove(id)
    .then(user => res.send(user))
    .catch(err => res.status(500).send(err))
  }
}

module.exports = User
