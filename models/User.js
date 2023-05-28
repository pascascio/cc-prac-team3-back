const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
<<<<<<< HEAD
        name: {
            type: String, 
            required: [true, 'Please provide name'],
            maxlength: 50,
            minlength: 5,
        }, 
        email: {
            type: String,
            required: [true, 'Please provide email'],
            match: [
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              'Please provide a valid email',
            ],
            unique: true,
          },
          password:{
            type: String, 
            required: [true, 'Please provide password'],
            minlength: 6,
          },
          phoneNumber: {
            type: String, 
            minlength:10,
            maxlength:10,
          },
          streetAddress: {
            type: String, 
            required: [true, 'Please provide street address'],
=======
	name: {
		type: String,
		required: [true, 'Please provide name'],
		maxlength: 50,
		minlength: 5,
	},
	email: {
		type: String,
		required: [true, 'Please provide email'],
		match: [
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			'Please provide a valid email',
		],
		unique: true,
	},
	password: {
		type: String,
		required: [true, 'Please provide password'],
		minlength: 6,
	},
	number: {
		type: String,
		minlength: 10,
		maxlength: 10,
	},
	streetAddress: {
		type: String,
		required: [true, 'Please provide street address'],
	},
	city: {
		type: String,
		required: [true, 'Please prove city'],
	},
	state: {
		type: String,
		required: [true, 'Please prove state'],
	},
	userType: {
		type: String,
		enum: ['buyer', 'seller'],
	},
})
>>>>>>> dev

module.exports = mongoose.model('User', UserSchema)
