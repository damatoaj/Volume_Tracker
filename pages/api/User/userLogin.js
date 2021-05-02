import { createUserToken } from '../../../middleware/auth'

const db = require('../../../db/models')


export default async function userLogin(req, res) {
    // console.log('logging in please @@@@@@@@@@@@@@@@@@@@@@@@@')
    const user = await db.user.findOne({
        where: {
            email: req.body.email
        }
    })

    const token = {
        token: createUserToken(req, user),
    }

    const data = await user.getWorkouts()

    console.log(user, "%%%%%%%%%%%%%%%%%%%")
    console.log(data, "^^^^^^^^^^^^^^^^^")
    res.json(user, data, token)
}