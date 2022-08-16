const db = require('../../../../db/models');

export default async function userGetById(req, res) {
    const user = await db.user.findOne({
        where: {email: req.body.email}
    });
    res.status(200).json(user)
};