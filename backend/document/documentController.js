var Document = require('./documentSchema');

module.exports.get = function(id) {

};

module.exports.getById = function(req, res) {
    if(!req.body.doc_id){
        res.status(400).send('Document ID required');
        return;
    }

    Document.findOne({id: req.body.doc_id}, function(err, doc){

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
};

module.exports.update = function(id, set){
    // update all related documents
    // if such documents do not exist - create a new one
    save(id, set)
};

module.exports.save = function(id, set){
    // if such documents do not exist - create a new one
};
