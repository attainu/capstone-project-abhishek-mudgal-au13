import express from 'express'
import {body, validationResult} from 'express-validator'
import User from '../models/schema/user'
import bcrypt from 'bcryptjs'

const route = express.Router()

// Signup page!

route.post(
    '/register',
    [
        body('userName', 'Please enter your name').not().isEmpty().isAlphanumeric(),
        body('email', 'Please enter a valid email').isEmail(),
        body('password', 'Password should be of Minimum 6 and Maximum 15 in length!').isLength({min: 6, max: 15})
    ],
    async (req, res) => {

        //Signup form validation
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                data: {},
                errors: errors.array(),
                msg: "Unable to create user!"
            })
        }

        // Checking if user exists or not
        try {
            let user = await User.findOne({email: req.body.email})

            if(user){
                return res.status(400).json({
                    data: {},
                    errors: [{
                        location: "body",
                        param: "email",
                        value: req.body.email
                    }],
                    msg: "User already exists!"
                })
            }

            // If the above block is not executed, below signup action will be executed
            user = new User({
                userName: req.body.userName,
                email: req.body.email,                
                newUser: true,
            })
            const salt = await bcrypt.genSalt(15)
            user.password = await bcrypt.hash(req.body.password, salt)
            await user.save()

            return res.status(200).json({
                data: user,
                errors: [],
                msg: "User registered successfully"
            })

        } catch (e) {
            console.log(e.message)
            res.status(500).send("Internal Server Error!")
        }

    }
)

export {route as register}