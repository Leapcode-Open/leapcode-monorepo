'use strict'
const mongoose = require('mongoose');
const httpStatus = require('http-status')
const APIError = require('../utils/APIError')
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema

const stepSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String, 
    lessonId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        index : true
    },
    type: String,
    slug: {
        type: String,
        slug: 'name',
        unique: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    doneBy: {
        type: [String]
    },
  
    order: Number,
});



module.exports = mongoose.model('Step', stepSchema)
