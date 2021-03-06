
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

/**
 * Controller variables.
 */
var home = require('./routes/home');
var user = require('./routes/user');
var group = require('./routes/group');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', home.show);
app.get('/groups/all2/', group.all2);
app.get('/users/new', user.create);
app.get('/groups/all/', group.all);
app.get('/users/:id/', user.show);
app.get('/groups/:id/', group.show);
app.get('/groups/new', group.create);
app.get('/groups/find', group.find);
app.get('/users/edit', user.edit);
app.get('/groups/openNew', group.openNew);

app.locals.current_user_id = 1;
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
