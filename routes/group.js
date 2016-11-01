var data = require('../group.json');

exports.view = function(req, res){
	//console.log(data);
	res.render('group', data);
};
