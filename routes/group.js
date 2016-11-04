var data = require('../data.json');

exports.create = function(req, res){
  res.render('group/create', data);
};

exports.all = function(req, res){
  res.render('group/all', data);
};

exports.show = function(req, res){
  var id = req.params.id;
  var group ;
  var members ;
  var members_array = [];
  var searchField = "id";
  var searchVal = id;
  for (var i=0 ; i < data.groups.length ; i++)
  {
    if (data.groups[i][searchField] == searchVal) {
        group = (data.groups[i]);
        //console.log(data.groups[i]);
        members = data.groups[i]["user_ids"];
    }
  }
  console.log(members);
  for(var j = 0; j < members.length; j++){
    for (var i=0 ; i < data.users.length ; i++)
    {
      if (data.users[i][searchField] == members[j]) {
          console.log(members[j]);
          members_array.push(data.users[i]);
      }
    }
  }
  //console.log(results);
  var final = {groups:group, members:members_array};
  //console.log(final);
  res.render('group/show', final);
};
