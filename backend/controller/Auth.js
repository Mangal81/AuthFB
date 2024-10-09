const user = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;



// singup
exports.singUp = async (request, response) => {
	
	try {
		const {fullName, email, password} = request.body;
		response.json({
			name:fullName,
			email:email,
			password:password
		})
	} catch (error) {
		console.log(error.message)
	}
	
}



// login


