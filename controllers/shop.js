const path = require('path');


exports.getCustomers = (req, res, next) => { 
    //The res.render() function is used to render a view and sends the rendered HTML string to the client
    // render shop.ejs file
    res.render('shop')
}