// controllers/userController.js
let user = [];
 
exports.getAllUser = (req, res) => {
    res.status(200).json(user);
}
 
exports.postUser = (req, res) => {
    user = [...user, {...req.body}];
    res.status(200).json(user);
}
 
exports.updateUser = (req, res) => {
    const { id } = req.params;
    user[id] = req.body;
    res.status(200).json(user);
}
 
exports.deleteUser = (req, res) => {
    const { id } = req.params;
    user.splice(id-1 , 1);
    res.status(200).json(user);
}