/*
Assignment 2 -
 
Create an Api which accepts the method GET, POST, DELETE for a 
book management
 
title, author, price, publication
*/

const http = require('node:http');
 
const hostname = '127.0.0.1';
const port = 3000;
 
let booksData = [];
 
const server = http.createServer((req, res) => {
    const method = req.method.toUpperCase();
    const url = req.url;
 
    if(method === 'GET' && url === '/books') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(booksData));
    } else if(method === 'POST' && url === '/books') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const parsedBody = JSON.parse(body);
            const book = {"id":booksData.length ,...parsedBody};
            booksData.push(book);
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(book));
        })
    } else if(method === 'DELETE' && url === '/books') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const parsedBody = JSON.parse(body);
            if (parsedBody && parsedBody.id){
                const bookPOS = booksData.findIndex(book => book.id === parsedBody.id);
                if (bookPOS !== -1){
                    const book = {message: "Book Successfully Deleted",data: booksData[bookPOS]};
                    booksData.splice(bookPOS,1);
                    res.writeHead(200, {'Content-Type': 'application/json'});
                    res.end(JSON.stringify(book));
                }
                else {
                    res.writeHead(404, {'Content-Type': 'application/json'});
                    res.end(JSON.stringify({message: `id ${parsedBody.id} not found`}));
                }
            } else{
                res.writeHead(400, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({message: `No id in body`}));
            }
        })
    } else  if(method === 'DELETE' && url.startsWith('/books/')) {
        const id = parseInt(url.split('/')[2],10);
        const bookPos = booksData.findIndex(book => book.id =id);
        if (bookPos !== -1){
            const book = {message: "Book Successfully Deleted",data: booksData[bookPos]};
            booksData.splice(bookPos,1);
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(book));
        }
        else{
            res.writeHead(404, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({message: `id ${id} not found`}));
        }

    }
    else  if(method === 'GET' && url.startsWith('/books/')) {
        const id = parseInt(url.split('/')[2],10);
        const bookPos = booksData.findIndex(book => book.id =id);
        if (bookPos !== -1){
            const book =  booksData[bookPos];
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(book));
        }
        else{
            res.writeHead(404, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({message: `book id ${id} not found`}));
        }

    }
})
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});