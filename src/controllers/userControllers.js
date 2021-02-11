import mongoose from 'mongoose'
import brcypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserSchema } from '..models/userModels'
import e from 'express';
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

export const register = (req, res) => {
    const newUser = new User(req.body);
    //the request will send the password
    newUser.hashPassword = bcrypt.hasSync(req.bidy.password, 10);
    newUser.save((err, user) => {
        if (err) {
            return res.status(400).send({

            });
        } else {
            // return the user with the hasPassword for security
            user.hashPassword = undefined;
            return res.json(user);
        }

    })
}

// the logging function for loggin the Api

export const login = (req, res) => {
    User.findOne({
        email: req.body.email
    }, (err, user) => {
        if (err) throw err;
        if (!user) {
            res.status(401).json({ message: 'authen failed.No user' })
        } else if (user) {
            if (!user.comparePassword(req.body.password, user.hashPassword)) {
                res.status(401).json({ message: 'Authentication failed. Wrong Password' })
            } else {
                return res.json({
                    token: jwt.sign({
                        email: user.email,
                        username: user.username,
                        _id: user.id
                            // THE SECRET WORD THAT YOU USE FOR THE JSON KNOW IT IS OK TO MAKE THE TRANSACTION
                    }, 'RESTFULAPIS')
                })
            }
        }
    })

}