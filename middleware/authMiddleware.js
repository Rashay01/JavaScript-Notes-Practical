// middleware/authMiddleware.js
const authMiddleware = (req, res, next) => {
    if (!req.headers['x-auth']) {
        return res.status(401).json({ error: 'You must be logged in to access this resource.' });
    }
    next();
}
 
module.exports = authMiddleware;