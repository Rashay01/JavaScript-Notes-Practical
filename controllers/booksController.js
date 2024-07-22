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