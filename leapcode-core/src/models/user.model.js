'use strict'
const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const httpStatus = require('http-status')
const APIError = require('../utils/APIError')
const transporter = require('../services/transporter')
const config = require('../config')
const Schema = mongoose.Schema

const roles = [
  'user', 'admin', 'maintainer'
]

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  username: {
    type: String,
   
  },
  displayName: {
    type: String,
    maxlength: 50
  },
  displayPhoto: {
    type: String
  },
  uid: {
    type: String,
    unique: true
  },
  emailVerified: {
    type: Boolean,
    default: false
  },
  role: {
    type: String,
    default: 'user',
    enum: roles
  },
  githubUsername: {
    type: String,
  },
  githubInfo: {
    type: Schema.Types.Mixed
  },
  firstTime: {
    type: Boolean,
    default: true
  },
  points: {
    type:Number,
    default: 10
  },
  firstIssue: {
    type: String
  }
}, {
  timestamps: true
})


userSchema.index({ uid: -1 })


userSchema.post('save', async function saved (doc, next) {
  try {
    return next()
  } catch (error) {
    return next(error)
  }
})




module.exports = mongoose.model('User', userSchema)
