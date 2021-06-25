import express from 'express'
import user from '../models/schema/user'
import UserPage from '../models/schema/userPage'

const route = express.Router()

route.get('/:userName', async (req, res) => {
    try {
        
        let userPage = await UserPage.findOne({_id: req.params.userName})
        if(!userPage){
            return res.status(404).json({
                data: {},
                errors: [{
                    location: params,
                    value: req.params.userName,
                    msg: 'No page found!'
                }],
                msg: "No Page Found For The User"
            }
            )
        }
        delete userPage.creator
        delete userPage._v
        return res.status(200).json({
            data: userPage,
            errors: [],
            msg: "User Page Fetched Successfully"
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error!')
    }
})

export {route as userPage}