const express = require('express');
const router = express.Router();
const digi_controller = require('../controllers/controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/',digi_controller.index);
router.get('/test',digi_controller.test);
router.post('/form',digi_controller.queryFormSubmit);
//router.get('/test', (req,res)=>{
//    res.send("routes are working");
//});
//router.post('/create',product_controller.product_create);
//router.get('/:id',product_controller.product_details);
//router.put('/:id/update', product_controller.product_update);
//router.delete('/:id/delete',product_controller.product_delete);
module.exports = router;