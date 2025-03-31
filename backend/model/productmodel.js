const mongoose = require('mongoose');
const productmodel = mongoose.model("product", new mongoose.Schema({
	carname: { type: String, required: true },
	rentprice: { type: String, required: true },
	ownername: { type: String, required: true },
	carnumber: { type: String, required: true,},
	fueltype: { type: String, required: true,},
	sit_no: { type: String, required: true,},
	carimage:{type: String, required:true}
}));
module.exports = productmodel