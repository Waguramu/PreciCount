module.exports = userRoutes;

function userRoutes(passport) {

    var userController = require('./userController');
    var router = require('express').Router();

    //router.post('/');
    router.post('/login', userController.login);
    router.post('/signup', userController.signup);
    router.post('/deregister', passport.authenticate('jwt', {session: false}), userController.deregister);
    router.get('/list', userController.listUsers);

    return router;
}
