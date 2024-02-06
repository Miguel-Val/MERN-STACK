const express = require('express');

const router = express.Router();

//GET all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'Get all workouts'})
})

//GET all single workouts
router.get('/:id', (req, res) => {
    res.json({mssg: 'Get a single workout'})
})
//POST a workout
router.post('/', (req, res) => {
    res.json({mssg: 'Post a new workout'})
})
//DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete a workout'})
})
//UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update a workout'})
})

module.exports=router