var data = require('../data.json');

exports.create = function(req, res){
  res.render('user/create');
};

exports.edit = function(myData, res){
  var myQuery = myData.query;
  var searchField = "id";
  var results = [];
  var searchVal = 1;
  for (var i=0 ; i < data.users.length ; i++)
  {
    if (data.users[i][searchField] == searchVal) {
        data.users[i]["name"] = myQuery["name"];
        data.users[i]["bio"] = myQuery["bio"]; 
        data.users[i]["study_pref"]["time"] = myQuery["time"];
        data.users[i]["study_pref"]["personality"] = myQuery["personality"];
        data.users[i]["study_pref"]["loc"] = myQuery["loc"];
        data.users[i]["study_pref"]["chill"] = myQuery["chill"];
        results.push(data.users[i]);
    }
  }
  console.log(myQuery);

  res.render('user/show', results[0]);
}

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
