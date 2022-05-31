
const isAdmin = (req, res, next) => {
    if (req.user.role === 'admin') {
        return next();
    }

    res.status(403).json({
        error: 'You do not have permissions to perform this action',
    });
}

module.exports = isAdmin;