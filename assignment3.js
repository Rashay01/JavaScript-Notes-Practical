const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const port = 3000;
 
const app = express();

let booksData = [];
 
router.use((req, res, next) => {
    // Middleware will come in between each request
    // and it will check the whether the request is valid or not
    console.log('XAuth Headers is present ? -', req.headers['x-auth']);
    if (!req.headers['x-auth']) return next('router')
    next();
})
 
router.get('/', (req, res, next) => {
    res.send(booksData);
})
 
router.post('/', (req, res, next) => {
    const book = {"id":booksData.length ,...req.body};
    booksData.push(book);
    res.send(book);
})

router.delete('/:id', (req, res, next) => {
    const id = parseInt(req.params.id,10);
    const bookPos = booksData.findIndex(book => book.id ==id);
    if (bookPos !== -1){
        const book = {message: "Book Successfully Deleted",data: booksData[bookPos]};
        booksData.splice(bookPos,1);
        res.send(book);
    }
    else{
        res.status(404).send({message: `id ${id} not found`});
    }
})

app.use(bodyParser.json());
 

app.use('/books', router);
 
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});