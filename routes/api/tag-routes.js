const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const allTags = await Tag.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(allTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    const singleTag = await Tag.findByPk(req.params.id, {
      include: [{model: Product}]
    });

    res.status(200).json(singleTag);
  } catch (err){
    res.status(500).json(err)
  }
});

router.post('/', (req, res) => {
  // create a new tag
  const newTag = req.body.tag_name;
  try{
    Tag.create(newTag)
    res.status(200).json('New Tag Created')
  } catch (err){
    res.status(500).json(err)
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try{
    Tag.update(req.body.tag_name, {
        where: {id: req.params.id}
      }
    );
    res.status(200).json('Tag Updated')
  } catch (err){
    res.status(500).json(err)
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try{
    Tag.destroy({
      where: {id: req.params.id}
    });
    res.status(200).json('Tag Deleted');
  } catch (err){
    res.status(500).json(err)
  }
});

module.exports = router;
