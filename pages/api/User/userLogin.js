import { createUserToken } from '../../../middleware/auth'

const db = require('../../../db/models')

export default async function userLogin(req, res) {
    const user = await db.user.findOne({
        where: {
            email: req.body.email
        }
    });

    if (!user) return res.status(404).send({error: 'User does not exist'});

    const token = createUserToken(req, user);

    const workouts = await db.workout.findAll({
        where: { userId : user.id }
    });

    res.status(200).json({user, workouts, token});
};