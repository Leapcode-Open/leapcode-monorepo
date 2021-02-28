'use strict'
const mongoose = require('mongoose');
const httpStatus = require('http-status')
const APIError = require('../utils/APIError')
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema

const projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    organisation: {
        type: String
    },
    description: String, 
    slug: {
        type: String,
        slug: 'name',
        unique: true,
       
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    githubUrl: String,
    githubInfo: {
        type: Schema.Types.Mixed
    },
    doneBy: {
        type: [Schema.Types.ObjectId]
    },
    progressBy: {
        type: [Schema.Types.ObjectId]
    },
    active: {
        type: Boolean,
        default: true
    },
    gitpod: {
        type: String
    },
    labels: {
        type: String
    },
});

projectSchema.index({ slug: -1 })
module.exports = mongoose.model('Project', projectSchema)
