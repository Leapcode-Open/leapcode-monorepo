'use strict'
const mongoose = require('mongoose');
const httpStatus = require('http-status')
const APIError = require('../utils/APIError')
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);
const Schema = mongoose.Schema

const feedSchema = new Schema({
    uid: {
        type:String,
        required:true
    },
    task: {
        type:String,
        required:true
    },
    sessionId: {
        type:Schema.Types.ObjectId,
        required:true
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('Feed', feedSchema)
