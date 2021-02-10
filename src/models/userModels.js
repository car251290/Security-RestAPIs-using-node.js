import mongoose from 'moogose'
import brcypt from 'bcrypt';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    //for the security propose I will be again a Schema secure of objects. 
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    hashPassword: {
        type: String,
        required: true
    },
    created_data: {
        type: Date,
        default: Date.now
    }

});

//function to compare the passwords that are the password the password
UserSchema.methods.comparePassword = (password, hashPassword) => {
    return brcypt.compareSync(password, hashPassword);
}