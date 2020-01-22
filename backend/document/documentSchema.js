var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.ObjectID;

var documentSchema = mongoose.Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        unique: false
    },
    date: {
        type: String
    },
    title: {
        type: String
    },
    annotations: [{
        type: String,
        unique: false
    }],
    keypoints: [{
        type: String,
        unique: false
    }],
    file: {
        type: String,
        // type: Schema.Types.ObjectId,
        ref: 'file'
        // unique: true
    }

});

documentSchema.virtual('id').get(function () {
    return this._id;
});

// Ensure virtual fields are serialised.
documentSchema.set('toJSON', {
    virtuals: true
});
documentSchema.set('toObject', {
    virtuals: true
});


module.exports = mongoose.model('document', documentSchema);
module.exports.documentSchema = documentSchema;
