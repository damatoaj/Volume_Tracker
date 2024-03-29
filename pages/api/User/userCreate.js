const db = require('../../../db/models');
const bcrypt = require('bcrypt');
const { createUserToken } = require('../../../middleware/auth');


export default async function userCreate(req, res) {
    const hashPassword = await bcrypt.hash(req.body.password, 10)
    await db.user.sync({ force: true })
    const user = await db.user.create({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: hashPassword
        });

    if (!user) return res.status(500).send({error: 'Could not create user'});
    
    const token = createUserToken(req, user);

    res.status(201).json({user, token});
};