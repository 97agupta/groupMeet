//var data = require('../data.json');

exports.view = function(req, res){
	//console.log(data);
	res.render('group', {
    'name': 'Aman Gupta',
    'group_name': "SAMPLE GROUP NAME"
  });
};
