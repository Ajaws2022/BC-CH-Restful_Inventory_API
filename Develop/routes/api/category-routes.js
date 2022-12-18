const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try{
    const allCats = await Category.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(allCats);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try{
    const catData = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    });

    res.status(200).json(catData);
  } catch (err){
    res.status(500).json(err)
  }
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
