var mongoose = require('mongoose');
var Serie = mongoose.model('Series');

//GET - Return all registers
exports.findAll = function(req, res) {
 Serie.find(function(err, serie) {
 if(err) res.send(500, err.message);
 console.log('GET /series')
 res.status(200).jsonp(serie);
 });
};

//GET - Return a register with specified ID
exports.findById = function(req, res) {
 Serie.findById(req.params.id, function(err, serie) {
 if(err) return res.send(500, err.message);
 console.log('GET /series/' + req.params.id);
 res.status(200).jsonp(serie);
 });
};

//POST - Insert a new register
exports.add = function(req, res) {
 console.log('POST');
 console.log(req.body);
 var serie = new Serie({
 name: req.body.name,
 });
 serie.save(function(err, serie) {
 if(err) return res.send(500, err.message);
 res.status(200).jsonp(serie);
 });
};

//PUT - Update a register already exists
exports.update = function(req, res) {
 Serie.findById(req.params.id, function(err, serie) {
 serie.name = req.body.name;
 serie.save(function(err) {
 if(err) return res.send(500, err.message);
 res.status(200).jsonp(serie);
 });
 });
};

//DELETE - Delete a register with specified ID
exports.delete = function(req, res) {
 Serie.findById(req.params.id, function(err, serie) {
 serie.remove(function(err) {
 if(err) return res.send(500, err.message);
 res.json({ message: 'Successfully deleted' });
 });
 });
};