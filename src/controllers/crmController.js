import mongoose from 'mongose';
import { ContactSchema } from '../models/crmModel';

// constractor and pas the shema and contacts for have new contacts
const Contact = mongoose.model('Contact', ContactSchema);
// to past function and request and res
export const addNewContact = (req, res) => {
    const newContact = new Contact(req.body);
    // save the contact on the database 
    newContact.save((err, contact) => {
        if (err) {
            res.send(err)
        }
        res.json(contact)
    })
}

//get contacts  on the dabata 
export const getContact = (req, res) => {
    Contact.find({}, (err, contact) => {
        if (err) {
            res.send(err)
        }
        res.json(contact)
    });
}

// get the contact of the ID
export const getContactwithID = (req, res) => {
    Contact.findById(req.params.contactID, (err, contact) => {
        if (err) {
            res.send(err)
        }
        res.json(contact)
    });
}

//To make updates of the contacts 
export const updateContact = (req, res) => {
    // the method to use for past the ID (key) and the request
    Contact.findOneAndUpdate({ _id: req.params.contactID }, req.body, { new: true, useFindAndModify: false }, (err, contact) => {
        if (err) {
            res.send(err)
        }
        res.json(contact)
    });
}

//delete function of the contacts
export const deleteContact = (req, res) => {
    //to remove the contact we need the ID key and get the request of the params on the contactID
    Contact.remove({ _id: req.params.contactID }, (err, contact) => {
        if (err) {
            res.send(err)
        }
        // the messaes object that the contact is delate
        res.json({ message: 'successfull delete contact' })
    });
}