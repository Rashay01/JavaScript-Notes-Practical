//controllers/formController.js
exports.saveFormData = (req, res) => {
    const {name, email, message} = req.body;
    const pool = req.pool;
    console.log("Pool -", pool);
    const sql = `INSERT INTO form_data (name, email, message) VALUES (?, ?, ?)`;
    req.pool.query(sql, [name, email, message], (err, results) => {
        console.log("Result: " + JSON.stringify(results));
        if(err) {
            console.error(err);
            res.status(500).json({ error: 'Error saving form data' });
            return;
        }
        res.json({
            status: 'success',
            data: {...req.body}
        })  
    })
}