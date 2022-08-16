const db = require('../../../../db/models')


export default async function workoutCreate(req, res) {
    const workout = await db.workout.create({
        date: req.body.date,
        minutes: req.body.minutes,
        heartRate: req.body.heartRate,
        volume: req.body.volume,
        userId: req.body.id
    });

    if(!workout) return res.status(500).send({error: 'Could not create workout'});

    res.status(201).json(workout);
};