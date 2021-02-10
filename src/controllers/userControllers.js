import mongoose from 'mongoose'
import brcypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserSchema } from '..models/userModels'
//expectiong the Schema
const User = mongoose.model('User', UserSchema);
// the function to login
export const loginRequired = (req, res, next) => {

    if (req.user) {
        next();
    } else {
        //to retur the autoritation from the user to login
        return res.status(401).json({ message: 'Unautorized user' })
    }

}