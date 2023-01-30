// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {through: ProductTag});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {through: ProductTag});
// Secondary associations to allow for diverse queries
Product.hasMany(ProductTag);
ProductTag.belongsTo(Product);
Tag.hasMany(ProductTag);
ProductTag.belongsTo(Tag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

