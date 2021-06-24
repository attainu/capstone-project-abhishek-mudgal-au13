import express from 'express'
import { InitMongo } from './models/configs/config'
import cors from 'cors';

// const passport = require('passport')


//initiating the server below
const api = express()
InitMongo()


//Express configs below this line
api.use(express.json())
api.set('trust proxy', true)
api.use(cors())

// api.use(passport.initialize())
// require("./utils/passportAuth")(passport)


//Importing Routes all below:

import {register} from './routes/register'
import {login} from './routes/login'



// plugging in all the apis below:
api.use('/api', register)
api.use('/api', login)
api.get('/', (req, res) => {
    res.redirect('https://google.com')
})

//listens to requests on the port
api.listen(
    process.env.PORT || 5001,
    () => {
    console.log(`Launched the server at http://localhost:5001`)
})