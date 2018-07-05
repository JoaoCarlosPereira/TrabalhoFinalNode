module.exports = function(app) {
	var Schema = require('mongoose').Schema;
	var produto = Schema({
		descricao: {type: String, required: true
		, codigo: {unique: true}}
		, quantidade : {type: String}
	});
	return db.model('produtos', produto);
};