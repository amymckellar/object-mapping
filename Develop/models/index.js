// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
products.belongsTo(category, {
  foreignKey: "category_id",
});

// Categories have many Products
category.hasMany(products, {
  foreignKey: "category_id",
});

// Products belongToMany Tags (through ProductTag)
products.belongsToMany(tag, {
  through: productTag,
  foreignKey: "product_id",
});

// Tags belongToMany Products (through ProductTag)
tag.belongsToMany(products, {
  through: productTag,
  foreignKey: "tag_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
