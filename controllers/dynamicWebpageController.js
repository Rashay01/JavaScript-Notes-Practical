const template = (name) => {
    return `
      <!DOCTYPE html>
          <html lang="en">
              <head>
                  <title>Node Static Server</title>
              </head>
              <body>
                  <h1>Hello, ${name}</h1>
              </body>
          </html>
      `
  }

exports.serveWebpage = (req, res) => {
    const name = req.query.name || 'Guest';
    const htmlContent = template(name);
    res.send(htmlContent);

}