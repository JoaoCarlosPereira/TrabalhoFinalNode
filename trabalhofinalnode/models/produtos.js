module.exports = function (app) {
	var Schema = require('mongoose').Schema;
	var produto = Schema({
		descricao: {
			type: String, required: true
			, index: { unique: true }
		}
		, quantidade: { type: Number, required: true }
	});
	return db.model('produtos', produto);
};