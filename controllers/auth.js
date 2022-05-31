const jwt = require('jsonwebtoken');

const registeredUsers = [];

const {SECRET_KEY} = process.env;

exports.signup = (req, res) => {

    const {email, password, admin} = req.body;

    const newUser = {email, password};
    newUser.role = admin ? 'admin' : 'user';

    registeredUsers.push(newUser);

    const token = jwt.sign({email, role: newUser.role}, SECRET_KEY);

    res.json({...newUser, token});
}

exports.login = (req, res) => {
    const {email, password} = req.body;

    const validateCredentials = user => user.email === email && user.password === password;
    const user = registeredUsers.find(validateCredentials);

    if (user) {
        const token = jwt.sign({email, role: user.role}, SECRET_KEY);
        return res.json({token});
    }

    res.status(401).json({error: 'Invalid credentials'});
}

// Requires basic auth
exports.getMyUserInfo = (req, res) => {
    res.json(req.user);
}

// Requires admin auth
exports.getAllUsers = (req, res) => {
    res.json(registeredUsers);
}