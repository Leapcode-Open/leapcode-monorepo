
const mongoose = require('mongoose');
const httpStatus = require('http-status')
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema



const sessionSchema = new Schema({
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      
    },
    completed: Boolean,
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        default: ''
    },
    slug: {
        type: String,
        slug: 'name',
        unique: true
    },
    prExist: Boolean,
    pullRequestId: Number,
    pullRequest: {
        type: Schema.Types.Mixed
    },

    issueExist: Boolean,
    issueId: Number,
    issue: {
        type: Schema.Types.Mixed
    },
    firstTime: Boolean
}, {
    timestamps: true,
});


sessionSchema.index({ userId: -1, projectId:1  })

module.exports = mongoose.model('Session', sessionSchema);
