const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    username : {
        value: String,
        required: Boolean
    },
    email : {
        value: String,
        required: Boolean
    },
    password : {
        value: String,
        required: Boolean
    }
});

module.export = User = mongoose.model('user', UserSchema);