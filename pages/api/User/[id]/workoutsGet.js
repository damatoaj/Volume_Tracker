const db = require('../../../../db/models')

export default async function workoutsGet(req, res) {
    const workouts= await db.workout.findAll({
        where: { userId : req.query.id }
    });  

    if (!workouts) return res.status(404).send({error: 'Could not find workouts'});
    res.status(200).json(workouts);
};