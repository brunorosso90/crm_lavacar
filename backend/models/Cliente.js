// Create a Mongoose model for Cliente with fields: name, phone, email, birthday, lastVisit
const mongoose = require('mongoose');
const clienteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: /.+\@.+\..+/
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    birthday: {
        type: Date,
        required: false
    },
    lastVisit: {
        type: Date,
        required: false
    }
}, {
    timestamps: true // Automatically manage createdAt and updatedAt fields
});
const Cliente = mongoose.model('Cliente', clienteSchema);
module.exports = Cliente;
