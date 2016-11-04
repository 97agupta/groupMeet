var data = require('../data.json');

exports.create = function(req, res){
  res.render('user/create');
};

exports.show = function(req, res){
  var id = req.params.id;
  var results = [];
  var searchField = "id";
  var searchVal = id;
  for (var i=0 ; i < data.users.length ; i++)
  {
    if (data.users[i][searchField] == searchVal) {
        results.push(data.users[i]);
    }
  }
  //console.log(results);
  res.render('user/show', results[0]);
};
