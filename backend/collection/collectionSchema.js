var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.ObjectID;
var users = require('../user/userSchema');
var documents = require('../document/documentSchema');

var collectionSchema = mongoose.Schema({
    creator: users.userSchema,
    date: {
        type: String
    },
    title: {
        type: String,
        unique: true
    },
    annotations: [{
        type: String,
        unique: false
    }],
    summary: {
        type: String,
        unique: false
    },
    documents: [documents.documentSchema]
});

module.exports = mongoose.model('collection', collectionSchema);