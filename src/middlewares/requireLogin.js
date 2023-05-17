const check_user_aut = function (req, res, next) {
    if (!req.user) {
        return res.status(401).send({ error: "You must be login to make this action." });
    } else {
        next();
    }
}

export default check_user_aut;