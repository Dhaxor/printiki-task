var express = require('express');
var router = express.Router();
const Products = require('../../models/Products');
const { check, validationResult } = require('express-validator');


/* GET home page. */
 router.get('/', async function(req, res) {
    try {
        const products = await Products.find({}).sort({ date: -1 }).limit(10);
        return res.json(products);
        
    } catch (error) {
        console.log(error);
    }
 });



    /* add a todo */
 router.post('/',[check('name', 'Name is create a product').not().isEmpty()], async function(req, res) {
   
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        const product = new Products({
            name : req.body.name,
            description : req.body.description,
            price : req.body.price,
            image : req.body.image
        });

        await product.save();
        return res.status(200).json({ product: product });
        
    } catch (error) {
        console.error(err.message);
        res.status(500).json('Server Error');
    }

});

/* get todo by id */

router.get('/:id', async function(req, res) { 
    try {
        const product = await Product.findById(req.params.id);
        return res.json(product);
        
    } catch (error) {
        console.log(error);
    }
 });

 /* update a todo*/

 router.put('/:id',[check('title', 'Title is required to uodate a todo').not().isEmpty()], async function(req, res) { 
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const product = await Products.findById(req.params.id);
        product.name = req.body.name;
        product.description = req.body.description;
        product.price = req.body.price;
        product.image = req.body.image;
        await product.save();
        return res.status(200).json({ product: product });
        
    } catch (error) {
        console.error(error);
        res.status(500).json('Server Error');
    }
 })
;


/* delete a todo */
router.delete('/:id', async function(req, res) { 
    try {
        const todo = await  Product.findByIdAndRemove(req.params.id);
        return res.status(200).json({ product: product });
        
    } catch (error) {
        console.log(error);
    }
});

/* Search for todo by title*/
router.get('/search/:title', async function(req, res) { 
    try {
        const todo = await Todo.find({ title: req.params.title });
        return res.json(todo);
        
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
