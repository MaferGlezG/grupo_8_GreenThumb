function guestMiddleware(req, res, next) {
    if (!req.session.userLogged) {
        return res.redirect('/user/register');
    }
    next();
}

module.exports = guestMiddleware;
