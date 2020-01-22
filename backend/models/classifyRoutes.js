module.exports = classifyRoutes;

function classifyRoutes(passport) {

    var modelsController = require('./modelController');
    var router = require('express').Router();
    var unless = require('express-unless');

    var mw = passport.authenticate('jwt', {session: false});
    mw.unless = unless;

    //middleware
    router.use(mw.unless({method: ['GET', 'POST']}));

    //router.post('/');
    router.get('/:id', modelsController.getType);
    router.post('/:id', modelsController.updateType);

    return router;
}
