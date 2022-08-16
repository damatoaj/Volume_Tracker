const db = require('../../../../db/models');

export default async function userGetById(req, res) {
    const user = await db.user.findOne({
        where: {email: req.body.email}
    });

    if (!user) return res.status(404).send({error: 'Could not find user'});
    res.status(200).json(user);
};