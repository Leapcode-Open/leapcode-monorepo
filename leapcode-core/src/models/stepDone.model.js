'use strict'
const mongoose = require('mongoose');
const httpStatus = require('http-status')
const APIError = require('../utils/APIError')
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema

const stepDoneSchema = new Schema({
    stepId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    sessionId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    userId: {
        type:String
    },
    type: {
        type: String,
        required: true
    },
    info: {
        type: mongoose.Schema.Types.Mixed
    }
},{
    timestamps: true
});


module.exports = mongoose.model('StepDone', stepDoneSchema)
