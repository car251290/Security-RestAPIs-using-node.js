import express from "express";
import routes from './src/routers/crmRouter';
import mongoose from 'mongoose';
import jsonwebtoken from 'jsonwebtoken';
import bodyParse from 'body-parse';
import { JsonWebTokenError } from "jsonwebtoken";
// this is the entry point of the server and will be express
const app = express();

const PORT = 4000;
//mongoose connection to the API
mongoose.Promise = global.Promise;
//this is the connection
mongoose.connect('mongodb://localhost/CRMdb', {
    //this is the object on the database
    useNewUrlParser: true,
    useUnifiedTopology: true,

});

//body parse connection 
app.use(bodyParser.uslencoded({ extended: true }));
app.use(bodyParse.json());

//jwt setup

app.use((res, req, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split('')[0] === 'JWT') {
        jsonwebtoken.verify(req.header.authorization.split('')[1], 'RESTFULAPIS', (err, decode) => {
            if (err) req.user = undefined;
            req.user = decodee;
            next();
        });
    } else {
        req.user = undefined;
        next();
    }

})

routes(app);
// this is method get and has the variables req and res
app.get('/', (req, res) =>
    res.send(`node and express server running on port ${PORT}`)
);
// this will past the PORT to send the messages and print the server where is running
app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);