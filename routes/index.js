/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);
var url = require('url');

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
	// Views
	app.get('/', routes.views.index);

	app.get('/aboutus/who-we-our', function(req, res){
		var view = new keystone.View(req, res);
		view.query('Abouts', keystone.list('About').model.findOne({'name' : 'Who We Are'}));
		view.render('wwr')
	});

	app.get('/aboutus/our-vision', function(req, res){
		var view = new keystone.View(req, res);
		view.query('Abouts', keystone.list('About').model.findOne({'name' : 'Our_Vision'}));
		view.render('ourvision')
	});

	app.get('/aboutus/our-brands', function(req, res){
		var view = new keystone.View(req, res);
		view.query('Abouts', keystone.list('About').model.findOne({'name' : 'Our Brands'}));
		view.render('ourbrands')
	});

	app.get('/product-info/why-wall-covering', function(req, res){
		var view = new keystone.View(req, res);
		view.render('why-wall')
	});

	app.get('/product-info/Installation', function(req, res){
		var view = new keystone.View(req, res);
		view.render('install')
	});

	app.get('/product-info/Maintenance', function(req, res){
		var view = new keystone.View(req, res);
		view.render('maint')

	});

	app.get('/product-info/Warranty', function(req, res){
		var view = new keystone.View(req, res);
		view.render('warranty')
	});

	app.get('/getintouch', function(req, res){
		var view = new keystone.View(req, res);
		view.query('Getins', keystone.list('Getin').model.findOne({'name' : 'getintouch'}));
		view.render('getintouch')
	});

	app.get('/collections', routes.views.Collections.collection);

	app.get('/collections/:collectionname', routes.views.Collections.products);
	// app.get('/search', routes.views.Collections.search);
	app.get('/search', function(req, res){
		var view = new keystone.View(req, res);
		 filters = {
        keywords: req.query.keywords
    };

    data = {
        products:[],
        keywords: "",
    };
	// console.log(filters.keywords.split(" "));
		view.query('products', keystone.list('Product').model.find(
		  {$text: {$search : filters.keywords } },
            {score : {$meta: "textScore"} }).sort({score : {$meta : 'textScore'} }). limit(20)
			
        
       
		);	
		
		view.render('products_page');
});

	// app.get('/collections/ashford',  routes.views.Collections.products);

	app.get('/collections/:collectionname/filter', function(req, res){
		// var ash_color = req.param('color');
		function ArrToObj(array){
  var Obj = {};
  var len = array.length;
  for (var i = 0; i < len; i+=2){
    Obj[array[i]] = array[i+1]
  }
  return Obj;
}
var url = req.url;
a = url.split('?');
b = a[1].split('&');


params = [];
for (var i = 0; i < b.length; i++) {
        var nv = b[i].split('=');
        for(var j = 0; j<nv.length; j++){
          params.push(nv[j]);
  }
}
params.push('cat_name' , req.params.collectionname);
 Obj =  ArrToObj(params);  

// res.send(b);
		var view = new keystone.View(req, res);
		view.query('products', keystone.list('Product').model.find(Obj));
		view.query('Product', keystone.list('Product').model.findOne({'cat_name' : req.params.collectionname}));
		view.render('products_page')
	});

	app.get('/product/:productname', routes.views.Collections.single_product);

	
	

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

};
