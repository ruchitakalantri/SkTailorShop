const path = require("path");

exports.getShop = (req, res, next) => {
  //The res.render() function is used to render a view and sends the rendered HTML string to the client
  // render shop.ejs file
  res.render("shop", {
    path: "/",
  });
};

exports.getCustomers = (req, res, next) => {
  //The res.render() function is used to render a view and sends the rendered HTML string to the client
  // render shop.ejs file
  res.render("customers", {
    path: "/customers",
  });
};

exports.getInfo = (req, res, next) => {
  //The res.render() function is used to render a view and sends the rendered HTML string to the client
  // render shop.ejs file
  res.render("about", {
    path: "/about",
  });
};
