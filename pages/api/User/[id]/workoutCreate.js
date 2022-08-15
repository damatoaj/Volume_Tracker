const db = require('../../../../db/models')


export default async function workoutCreate(req, res) {
    const user = await db.user.findOne({
        where: {
            id: req.body.user.id
        }
    })

   await user.createWorkout({
        date: req.body.date,
        minutes: req.body.minutes,
        heartRate: req.body.heartRate,
        volume: req.body.volume
    })
    const data = await user.getWorkouts()


    res.send(data)
}
//how do you write line 6
//what do you want to do line 13; add user one to many not join table
//what goes in the res.json
//also call all workouts to be sent in the 