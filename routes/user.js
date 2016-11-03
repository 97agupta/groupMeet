var data = require('../data.json');

exports.create = function(req, res){
  res.render('user/create');
};

exports.show = function(req, res){
  res.render('user/show', data);
};