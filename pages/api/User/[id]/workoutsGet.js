const db = require('../../../../db/models')

export default async function workoutsGet(req, res) {
    const workouts= await db.workout.findAll({
        where: { userId : req.query.id }
    });  
    res.status(200).json(workouts);
};