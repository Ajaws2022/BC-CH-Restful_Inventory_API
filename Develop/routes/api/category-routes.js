const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try{
    const allCats = await Category.findAll();
    res.status(200).json(allCats);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try{
    const catData = await Category.findOne({where: { id: req.params.id}}, {
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
  const newCat = req.body.category_name;
  try{
    Category.create(newCat)
    res.status(200).json('New Category Created')
  } catch (err){
    res.status(500).json(err)
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  
  try{
    Category.update(req.body.category_name, {
        where: {id: req.params.id}
      }
    );
    res.status(200).json('Category Updated')
  } catch (err){
    res.status(500).json(err)
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try{
    Category.destroy({
      where: {id: req.params.id}
    });
    res.status(200).json('Category Deleted')
  } catch (err){
    res.status(500).json(err)
  }
});

module.exports = router;
