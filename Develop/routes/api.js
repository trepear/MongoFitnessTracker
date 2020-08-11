const router = require("express").Router();
const Workout = require("../models/workout");
const { db } = require("../models/workout");

// GET route for getting last workout
router.get("/api/workouts", (req, res) => {
    Workout.find()
    .then(dbWorkouts => {
        res.json(dbWorkouts)
    }).catch(err => {
        res.json(err)
    });
});
// PUT route for adding exercise
router.put("api/workouts/:id", (req, res)=> {
    Workout.findByIdAndUpdate(req.params.id,
        {$push: { exercises: body }},
        { new: true, runValidators: true })
    .then(dbWorkouts => {
        res.json(dbWorkouts)
    }).catch(err => {
        res.json(err)
    });
})
// POST route for creating new workout
router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(dbWorkouts => {
        res.json(dbWorkouts)
    }).catch(err => {
        res.json(err)
    });
})
// GET route for getting workouts in range
router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7)
    .then(dbWorkouts => {
      console.log(dbWorkouts)
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
})

// DELETE route for deleting workouts
router.delete("/api/workouts", (req, res) => {
    Workout.findByIdAndDelete(req.params.id)
    .then(() => {
        res.json(true);
    }).catch(err => {
        res.json(err);
    })
})