import { createUserToken } from '../../../middleware/auth'

const db = require('../../../db/models')

export default async function userLogin(req, res) {
    const user = await db.user.findOne({
        where: {
            email: req.body.email
        }
    });

    if (!user) return new Error('User does not exist');

    const token = createUserToken(req, user);

    const data = await user.getWorkouts();

    res.status(200).json({user, data, token});
};