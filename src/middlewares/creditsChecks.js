const check_user_credits = function (req, res, next) {
    if (req.user.credits < 1) {
        return res.status(403).send({ error: "Not enough credits!" });
    } else {
        next();
    }
}

export default check_user_credits;