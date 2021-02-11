import { addNewContact, getContact, getContactwithID, updateContact, deleteContact } from '../controllers/crmController'
import { login, register, loginRequired } from './controllers/userControllers'
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

    }, loginRequired, getContact)

    //to past the contacts in the router 
    .post(loginRequired, addNewContact);
    //to past hast to be same or it will not work contactID
    app.route('/contact/:contactID')
        //get the contact and the login
        .get(loginRequired, getContactwithID)
        //to put the contact in the table and the login
        .put(loginRequired, updateContact)
        //delate the contact and the login
        .delate(loginRequired, deleteContact)
}

//create the new router 
//regristation route

app.route('/auth/register')
    .post(register);


app.route('/login')
    .post(login);




export default routers;