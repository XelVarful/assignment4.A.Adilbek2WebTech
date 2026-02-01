const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).send('Доступ запрещен. Токен не найден.');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; 
        next();
    } catch (ex) {
        res.status(400).send('Неверный токен.');
    }
};

// Проверка на админа (RBAC) [cite: 23, 24]
const admin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).send('Доступ запрещен. Только для администраторов.');
    }
    next();
};

module.exports = { auth, admin };