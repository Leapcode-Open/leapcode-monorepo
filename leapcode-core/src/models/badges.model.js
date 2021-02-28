'use strict'
const mongoose = require('mongoose');
const httpStatus = require('http-status')
const APIError = require('../utils/APIError')
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);
const Schema = mongoose.Schema

const badgesScheme = new Schema({
    uid: {
        type:String,
        required:true
    },
    name: {
        type:String,
        required: true
    },
    image: {
        type: String
    },
    bid: {
        type: String
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('badges', badgesScheme)
