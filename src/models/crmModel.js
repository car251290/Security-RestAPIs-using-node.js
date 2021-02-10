import mongoose from 'mongoose';
//create the variable for mongoose
const Schema = mongoose.Schema;
// the model of my database how it look
export const ContactSchema = new Schema({
    //list of the iteam for schema. 
    firstName: {
        type: String,
        required: 'Enter a frist name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    created_data: {
        type: Date,
        default: Date.now
    }

});