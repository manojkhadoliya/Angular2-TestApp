var express = require('express');
var Book = require('./../models/book');
var router = express.Router();

router.use(function (req, res, next) {
	console.log('Something is happening.');
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});


router.route('/books')
	.post(function (req, res) {
		var book = new Book(req.body);
		console.log("**", book)
		book.save(function (err) {
			if (err)
				res.send(err);

			res.send(201, { message: 'book created!' });
		});
	})

	.get(function (req, res) {
		Book.find(function (err, books) {
			console.log("********", books)
			if (err) {
				res.send(err);
			}
			else {
				res.send(books)
			}
		});
	});


router.route('/books/:id')
	.get(function (req, res) {
		Book.findById(req.params.id, function (err, book) {
			if (err) {
				res.send(err);
			}
			else (
				res.send(book)
			)
		});
	})

	.put(function (req, res) {
		Book.findById(req.params.id, function (err, book) {
			if (req.body.title != undefined) {
				book.title = req.body.title;
			}
			if (req.body.author != undefined) {
				book.author = req.body.author;
			}
			if (req.body.price != undefined) {
				book.price = req.body.price;
			}
			book.save(function (err) {
				if (err) {
					res.send(err);
				}
				else (
					res.send(204, null)
				)
			});
		});
	})

	.delete(function (req, res) {
		Book.remove({ _id: req.params.id }, function (err, book) {
			if (err) {
				res.send(err);
			}
			else (
				res.send(204, null)
			)
		});
	});


router.get('/', function (req, res) {

	res.json({ msg: 'welcome to api!' });
});

module.exports = router;