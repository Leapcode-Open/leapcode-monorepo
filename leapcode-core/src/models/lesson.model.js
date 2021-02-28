'use strict'
const mongoose = require('mongoose');
const httpStatus = require('http-status')
const APIError = require('../utils/APIError')
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema

const lessonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String, 
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
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
        type: [Schema.Types.ObjectId]
    },
    progressBy: {
        type: [Schema.Types.ObjectId]
    },
    completedUsers: {
        type: [String]
    },
    order:Number
});

lessonSchema.index({ courseId: -1 })


module.exports = mongoose.model('Lesson', lessonSchema)
