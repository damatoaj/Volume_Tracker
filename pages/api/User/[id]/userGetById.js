import { render } from 'react-dom';

const db = require('../../../../db/models')


export default async function userGetById(req, res) {
    console.log("attempt to get user by id 😈", req.body);
    console.log(req)
    // console.log(user)
    const user = await db.user.findOne({
        where: {email: req.body.email}
    });
    console.log(user)
    res.json(user)
}