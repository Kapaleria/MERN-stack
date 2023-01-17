const express = require('express')
const {createWorkout,
        getWorkouts,
        getWorkout,
        updateWorkout,
        deleteWorkout
} = require('../controllers/workoutController')

//const Workout = require('../models/WorkoutModel')
const router = express.Router()

//GET all workouts
router.get('/', getWorkouts)

//GET single workout
router.get('/:id', getWorkout )

//POST a new workout
router.post('/',createWorkout)

//DELETE a workouts
router.delete('/:id',deleteWorkout)

//UPDATE a workouts
router.patch('/:id',updateWorkout)

module.exports=router