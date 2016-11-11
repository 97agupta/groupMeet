var data = require('../data.json');
var names = require('../names.json');

exports.create = function(req, res){
  res.render('group/create', data);
};

exports.all = function(req, res){
  res.render('group/all', data);
};

exports.find = function(myData, res){


  var myQuery = myData.query;
  var className = myQuery.selectedClass;
  className = className + " Group 101";
  var frequency = myQuery.frequency;
  var membersIndex = myQuery.membersIndex;
  console.log(myQuery.membersIndex);
  var comfort = myQuery.comfort;
  var randomMembers = myQuery.randomMembers;

  var searchField = "id";
  var results = [];
  var searchVal = 1;
  for (var i=0 ; i < data.users.length ; i++)
  {
    if (data.users[i][searchField] == searchVal) {
        results.push(data.users[i]);
    }
  }

  var group = {
    "id": 100,
    "name": className,
    "active": true,
    "user_ids": [101,102,103],
    "num_time" : membersIndex,
    "num_personality" : membersIndex,
    "num_loc": membersIndex,
    "num_chill": membersIndex,
    "time": results[0]["study_pref"]["time"],
    "personality": results[0]["study_pref"]["personality"],
    "loc": results[0]["study_pref"]["loc"],
    "chill": results[0]["study_pref"]["chill"]
  };

  var members_array = [];
  var starting = 101;

  for(var i = 0; i < membersIndex; i++){

    members_array[i] = {
      "id": starting,
      "name": names[randomMembers[i]]["name"]
    };

    data.users.push(members_array[i]);

    starting ++;
  }

  data.groups.push(group);


  var final = {groups:group, members:members_array};

  res.render('group/show', final);
}

exports.show = function(req, res){
  //console.log(data);
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
