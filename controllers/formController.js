//controllers/formController.js
exports.saveFormData = (req, res) => {
    res.json({
        status: 'success',
        data: {...req.body}
    })
}