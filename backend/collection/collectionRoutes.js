module.exports = collectiontRoutes;

function collectiontRoutes(passport) {

    var collectionController = require('./collectionController');
    var router = require('express').Router();
    var unless = require('express-unless');

    var mw = passport.authenticate('jwt', {session: false});
    mw.unless = unless;

    //middleware
    router.use(mw.unless({method: ['GET', 'POST']}));

    //router.post('/');
    router.get('/:id', collectionController.getById);

    return router;
}