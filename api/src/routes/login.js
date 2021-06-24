import express from 'express'
import { body, validationResult } from 'express-validator'
import User from '../models/schema/user'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import auth from '../utils/auth'
import UserPage from '../models/schema/userPage';


const route = express.Router()


route.post(
    '/login',
    [
        body('email', 'Please enter a valid Email!').isEmail(),
        body('password', 'Please enter your Password')
    ],
    async (req, res) =>{

        // Validation checks for the login data
        const validationError = validationResult(req)
        if(!validationError.isEmpty()){
            return res.status(400).json({
                data: {},
                errors: validationError.array(),
                msg: "Login Unsucessful!"
            })
        }


        try {

            // Searching for the user in the database, if not found, user doesn't exist
            let user = await User.findOne({email: req.body.email})
            console.log(req.body.email);
            console.log(user);
            if(!user){
                return res.status(400).json({
                    data: {},
                    errors: [{
                        location: "body",
                        param: "password",
                        value: req.body.email,
                        msg: "User doesn't exists"
                    }],
                    msg: "User doesn't exists"
                })
            }

            let isMatch = await bcrypt.compare(req.body.password, user.password)
            if(!isMatch){
                return res.status(400).json({
                    data: {},
                    errors: [{
                        location: "body",
                        param: "password",
                        value: req.body.email,
                        msg: "Invalid credentials!"
                    }],
                    msg: "Email or password wrong!"
                })
            }

            //Logged in successfully, token is created
            jwt.sign(
                {user: {id: user.id}},
                process.env.JWT_KEY || `secret`,
                {
                    expiresIn: 31556926 // 1 year in seconds
                },
                (err, token)=>{
                    if(err) throw err;
                    res.status(200).json({
                        data: {token: token},
                        errors: [],
                        msg: "Login Success!"
                    })
                }
            )
        } catch (e) {
            console.log(e)
            return res.status(500).send("Internal Server Error!")
        }
    }
)


route.get(
    '/get-started',
    auth,
    async (req, res)=>{
        try {
            let user = await User.findById(req.user.id)
            if(user.newUser){
                return res.status(400).json({
                    data: user.newUser,
                    error: [],
                    msg: "New user, make a post request at /get-started"
                })
            }
        } catch (error) {
            console.log(error)
            return res.status(500).send('Bad monkey error')
        }
    }
)


route.post(
    '/get-started',
    auth,
    [
        body('userName', 'Enter a valid username').isAlphanumeric().isLength({min: 4, max: 10})
    ],
    async (req, res) => {

        try {
            let user = await User.findById(req.user.id)

            console.log(user);
            if(user.newUser == true){
                let userPage = new UserPage({
                    _id: req.body.userName,
                    creator: req.user.id
                })

                await userPage.save()

                console.log(userPage);
                await User.findOneAndUpdate(
                    {email: user.email},
                    {newUser: false}
                )

                return res.status(200).json({
                    data: userPage,
                    error: [],
                    msg: 'New user added successfully!' 
                })
            }

            return res.status(400).json({
                data: {},
                error: [{
                    location: body,
                    value: req.body.userName
                }],
                msg: "Cannot create username, user not a new user"
            })


        } catch (error) {
            console.log(error);
            return res.status(500).send('Bad monkey error')
        }

    }
)

export { route as login }