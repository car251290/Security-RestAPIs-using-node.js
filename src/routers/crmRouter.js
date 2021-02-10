import { addNewContact, getContact, getContactwithID, updateContact, deleteContact } from '../controllers/crmController'

// the methods of CRUD 
// this are the end points 
const routers = (app) => {
    //it has to be the same as postman get recueste
    app.router('/contact')

    .get((req, res, next) => {
        //middleware to add 
        console.log(`REQUEST from ${req.originalUrl}`)
        console.log(`REQUEST from ${req.method}`)
            // to past to the next function 
        next();

    }, getContact)

    //to past the contacts in the router 
    .post(addNewContact);
    //to past hast to be same or it will not work contactID
    app.route('/contact/:contactID')
        //get the contact
        .get(getContactwithID)
        //to put the contact in the table
        .put(updateContact)
        //delate the contact
        .delate(deleteContact)
}

export default routers;