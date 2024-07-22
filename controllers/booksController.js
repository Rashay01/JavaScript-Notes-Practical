exports.getAllBookData = (req, res) => {
    const pool = req.pool;
    const sql = 'SELECT * FROM book_data';
    pool.query(sql, (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error selecting book data' });
        return;
      }
      console.log(req.body);
      res.json({
        status: 'success',
        data: { results },
      });
    });
};


exports.deleteBookData = (req, res) => {
    const { id } = req.params;
    const pool = req.pool;
    const sql = 'DELETE FROM book_data WHERE id = ?';
    pool.query(sql, [id], (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error deleting book data' });
        return;
      }
      res.json({
        status: 'success',
        message: 'Data deleted successfully',
      });
    });
};

exports.updateBookData = (req, res) => {
    const { id } = req.params;
    const { name, author, description, rating } = req.body;
    const pool = req.pool;
    const sql =
      'UPDATE book_data SET name = ?, author = ?, description = ?, rating = ? WHERE id = ?';
    pool.query(sql, [name, author, description, rating, id], (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error updating book data' });
        return;
      }
      res.json({
        status: 'success',
        message: 'Data updated successfully',
        data: { ...req.body },
      });
    });
  };


  exports.saveBookData = (req, res) => {
    const { name, author, description, rating } = req.body;
    const pool = req.pool;
    const sql = `INSERT INTO book_data (name, author, description, rating) VALUES (?, ?, ?, ?)`;
    req.pool.query(sql, [name, author, description, rating], (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error saving book data' });
        return;
      }
      res.json({
        status: 'success',
        data: { ...req.body },
      });
    });
  };