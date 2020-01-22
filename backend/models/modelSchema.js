var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.ObjectID;

var modelSchema = mongoose.Schema({
    date: {
        type: String
    },
    title: {
        type: String
    },
    model_file: {
        type: String
    }
});

modelSchema.virtual('id').get(function () {
    return this._id;
});

// Ensure virtual fields are serialised.
modelSchema.set('toJSON', {
    virtuals: true
});
modelSchema.set('toObject', {
    virtuals: true
});


module.exports = mongoose.model('model', modelSchema);
module.exports.modelSchema = modelSchema;
