var data = require('../data.json');

exports.create = function(req, res){
  res.render('group/create', data);
};

exports.all = function(req, res){
  res.render('group/all', data);
};

exports.find = function(req, res){

  var group = {
    "id": 100,
    "name": "New Group",
    "active": true,
    "user_ids": [101,102,103]
  };
  var members_array = [
    {
      "id": 101,
      "name": "New Member 1"
    },
    {
      "id": 102,
      "name": "New Member 2"
    },
    {
      "id": 103,
      "name": "New Member 3"
    }

  ];

  data.groups.push(group);
  data.users.push(members_array[0]);
  data.users.push(members_array[1]);
  data.users.push(members_array[2]);

  var final = {groups:group, members:members_array};

  res.render('group/show', final)
}

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
