'use strict'
const mongoose = require('mongoose');
const httpStatus = require('http-status')
const APIError = require('../utils/APIError')
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema

const inviteSchema = new Schema({
    uid: {
        type:String,
        required:true,
        unique: true
    },
    code: {
        type:String,
        required:true
    },
    type: {
        type: String,
        default:'normal'
    },
    limit: {
        type: Number,
        default: 3.
    },
    takers: {
        type: [String],
        default: []
    },
    info: {
        type: Schema.Types.Mixed,
        default: {}
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('Invites', inviteSchema)
