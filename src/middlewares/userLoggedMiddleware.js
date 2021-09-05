function userLoggedMiddleware(req, res, next) {
    if (req.session.userLogged) {
        return res.redirect('/user/register');
    }
    next();
}

module.exports = userLoggedMiddleware;
