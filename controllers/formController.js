//controllers/formController.js
exports.saveFormData = (req, res) => {
  const { name, email, message } = req.body;
  const pool = req.pool;
  const sql = `INSERT INTO form_data (name, email, message) VALUES (?, ?, ?)`;
  req.pool.query(sql, [name, email, message], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error saving form data' });
      return;
    }
    res.json({
      status: 'success',
      data: { ...req.body },
    });
  });
};

exports.updateFormData = (req, res) => {
  const { id } = req.params;
  const { name, email, message } = req.body;
  const pool = req.pool;
  const sql =
    'UPDATE form_data SET name = ?, email = ?, message = ? WHERE id = ?';
  pool.query(sql, [name, email, message, id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error updating form data' });
      return;
    }
    res.json({
      status: 'success',
      message: 'Data updated successfully',
      data: { ...req.body },
    });
  });
};

exports.deleteFormData = (req, res) => {
  const { id } = req.params;
  const pool = req.pool;
  const sql = 'DELETE FROM form_data WHERE id = ?';
  pool.query(sql, [id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error deleting form data' });
      return;
    }
    res.json({
      status: 'success',
      message: 'Data deleted successfully',
    });
  });
};

exports.getSpecificFormData = (req, res) => {
  const { id } = req.params;
  const pool = req.pool;
  const sql = 'SELECT * FROM form_data WHERE id = ?';
  pool.query(sql, [id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error selecting form data' });
      return;
    }
    res.json({
      status: 'success',
      data: { ...req.body },
    });
  });
};

exports.getAllFormData = (req, res) => {
  const pool = req.pool;
  const sql = 'SELECT * FROM form_data';
  pool.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error selecting form data' });
      return;
    }
    console.log(req.body);
    res.json({
      status: 'success',
      data: { results },
    });
  });
};
