let userController = {
    profile: function(req, res) {
        res.render('userProfile');
    },
    login: function(req, res) {
        res.render('login');
    },
    loginUp: function(req, res) {
        res.render('loginUp');
    },
    delete: function(req, res) {
        /*delete user*/
    }
}
module.exports = userController;