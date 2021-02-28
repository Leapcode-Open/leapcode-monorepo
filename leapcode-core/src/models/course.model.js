'use strict'
const mongoose = require('mongoose');
const httpStatus = require('http-status')
const APIError = require('../utils/APIError')
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema

const courseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String, 
    points: {
        type: Number,
        default:10
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        index: true
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
    completedUsers: {
        type: [String]
    },
    order: Number,

});



module.exports = mongoose.model('Course', courseSchema)
