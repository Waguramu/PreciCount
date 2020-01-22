var Collection = require('./collectionSchema');

module.exports.getById = function(req, res) {
    if(!req.body.col_id){
        res.status(400).send('Document ID required');
        return;
    }

    Collection.findOne({id: req.body.col_id}, function(err, col){

        if (err) {
            res.status(500).send(err);
            return
        }

        if (!col) {
            res.status(404).send('Not found');
            return;
        }
        res.status(200).json(col);
    });
};