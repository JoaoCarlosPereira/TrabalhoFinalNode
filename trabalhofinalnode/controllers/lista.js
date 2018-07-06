module.exports = function (app) {
	var ProdutoController = {
		index: function (req, res) {
			var _id = req.session.lista._id;
			Lista.findById(_id, function (erro, lista) {
				var produtos = lista.produtos;
				var resultado = { produtos: produtos };
				res.render('produtos/index', resultado);
			});
		},
		create: function (req, res) {
			var _id = req.session.lista._id;
			Lista.findById(_id, function (erro, lista) {
				var produto = req.body.produto;
				var produtos = lista.produtos;
				produtos.push(produto);
				lista.save(function () {
					res.redirect('/produtos');
				});a
			});
		},
		show: function (req, res) {
			var _id = req.session.lista._id;
			Lista.findById(_id, function (erro, lista) {
				var produtoID = req.params.id;
				var produto = lista.produtos.id(produtoID);
				var resultado = { produto: produto };
				res.render('produtos/show', resultado);
			});
		},
		edit: function (req, res) {
			var _id = req.session.lista._id;
			Lista.findById(_id, function (erro, lista) {
				var produtoID = req.params.id;
				var produto = lista.produtos.id(produtoID);
				var resultado = { produto: produto };
				res.render('produtos/edit', resultado);
			});
		},
		update: function (req, res) {
			var _id = req.session.lista._id;
			Lista.findById(_id, function (erro, lista) {
				var produtoID = req.params.id;
				var produto = lista.produtos.id(produtoID);
				produto.nome = req.body.produto.nome;
				produto.email = req.body.produto.email;
				lista.save(function () {
					res.redirect('/produtos');
				});
			});
		},
		destroy: function (req, res) {
			var _id = req.session.lista._id;
			Lista.findById(_id, function (erro, lista) {
				var produtoID = req.params.id;
				lista.produtos.id(produtoID).remove();
				lista.save(function () {
					res.redirect('/produtos');
				});
			});
		}
		// fim do controller...
	}
	return ProdutoController;
};