var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var seriesSchema = new Schema({
	id: {type: Number},
	name: {type: String},
});

module.exports = mongoose.model('Series', seriesSchema);