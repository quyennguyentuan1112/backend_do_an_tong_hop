const express = require('express');
const router = express.Router();

const {
    createProduct,
    readListProduct,
    updateProduct,
    deleteProduct,

    createNewCategory,
    readListCategory,
    updateCategory,
    deleteCategory,

    createNewOder,
    readListOder,
    updateOder,
    deleteOder,

    createNewAccount,
    readListAccount,
    updateAccount,
    deleteAccount,
} = require('../controller/controller')

router.post('/create-product', createProduct);
router.get('/read-list-product', readListProduct);
router.post('/update-product', updateProduct);
router.post('/delete-product', deleteProduct);

router.post('/create-category', createNewCategory);
router.get('/read-list-category', readListCategory);
router.post('/update-category', updateCategory);
router.post('/delete-category', deleteCategory);

router.post('/create-oder', createNewOder);
router.get('/read-list-oder', readListOder);
router.post('/update-oder', updateOder);
router.post('/delete-oder', deleteOder);

router.post('create-account', createNewAccount);
router.get('/read-list-account', readListAccount);
router.post('/update-account', updateAccount);
router.post('/delete-account', deleteAccount);


router.get('/', (req, res) => {
    res.json({success: true, message: 'Welcome to backend zone!'});
})

module.exports = router;