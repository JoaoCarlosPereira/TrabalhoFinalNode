module.exports = function(app) {
	var Schema = require('mongoose').Schema;
	var produto = Schema({
		descricao: {type: String, required: true
		, codigo: {unique: true}}
		, url_imagem : {type: String, required: true}
	});
	return db.model('produtos', produto);
};