let user = {};

exports.getAllUser = (req, res) =>{
    res.status(200).json(user);
}

exports.postUser = (req, res) => {
    user = {...req.body};
    res.status(200).json(user);
}

exports.updateUser = (req, res) => {
    user = {user,...req.body};
    res.status(200).json(user);
}

exports.deleteUser = (req, res) => {
    user = {};
    res.status(200).json(user);
}
