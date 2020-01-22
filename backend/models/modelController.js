let Image = require('../document/documentSchema');
var Model = require('./modelSchema');


module.exports.getCount = function(req, res) {
    if(!req.body.doc_id){
        res.status(400).send('Document ID required');
        return;
    }

    Image.findOne({id: req.body.doc_id}, function(err, doc){

        if (err) {
            res.status(500).send(err);
            return
        }

        if (!doc) {
            res.status(404).send('Not found');
            return;
        }
        res.status(200).json(doc);
    });

    // Check if type is Image
    // Do inference on the image
};

module.exports.getType = function(req, res) {
    if(!req.body.doc_id){
        res.status(400).send('Document ID required');
        return;
    }

    Image.findOne({id: req.body.doc_id}, function(err, doc){

        if (err) {
            res.status(500).send(err);
            return
        }

        if (!doc) {
            res.status(404).send('Not found');
            return;
        }
        res.status(200).json(doc);
    });

    // Check if type is Image
    // Do inference on the image
};

module.exports.updateCount = function(id, set){
    // update all related documents
    // if such documents do not exist - create a new one
    save(id, set)
    // Create a task for adaptive learning
};

module.exports.updateType = function(id, set){
    // update all related documents
    // if such documents do not exist - create a new one
    save(id, set)
    // Create a task for adaptive learning
};

