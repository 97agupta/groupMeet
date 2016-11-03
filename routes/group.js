var data = require('../data.json');

exports.create = function(req, res){
  res.render('group/create', data);
};

exports.all = function(req, res){
  res.render('group/all', data);
};

exports.show = function(req, res){
  res.render('group/show', data);
};