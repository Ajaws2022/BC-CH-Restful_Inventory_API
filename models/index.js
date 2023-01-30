// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});
// Categories have many Products
// Category.hasMany(Product, {
//   foreignKey: 'product_id',
//   onDelete: 'CASCADE'
// });
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {through: ProductTag});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {through: ProductTag});
Product.hasMany(ProductTag);
ProductTag.belongsTo(Product);
Tag.hasMany(ProductTag);
ProductTag.belongsTo(Tag)

//  Product.sync();
//  Category.sync();
//  Tag.sync();
//  ProductTag.sync();

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

