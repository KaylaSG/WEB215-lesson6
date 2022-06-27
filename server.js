import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import Cards from './dbCards.js'

//App Config
const app = express();
const port = process.env.PORT || 8001;
const  connection_url = 'mongodb+srv://admin:WEB215@cluster0.6ckxv.mongodb.net/?retryWrites=true&w=majority'

//Middlewares
app.use(express.json());
app.use(Cors());

//DB  config - CONNECT TO DATABASE
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    // useCreateIndex: true, ERROR MESSAGE: NOT SUPPORTED
    useUnifiedTopology: true
})

//API Endpoints
//get gets the information
app.get('/', (req, res) => res.status(200).send('Hello World!!'));

//post pushes info into database
app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
});

app.get('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.find((err, data) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
});

//Listener
app.listen(port, () => console.log('listening on localhost: ' + port))