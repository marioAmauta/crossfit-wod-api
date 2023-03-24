const { v4: uuid } = require('uuid');
const Workout = require('../database/Workout');

function getAllWorkouts() {
  const allWorkouts = Workout.getAllWorkouts();
  return allWorkouts;
}

function getOneWorkout() {
  return;
}

function createNewWorkout(newWorkout) {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' })
  };

  const createdWorkout = Workout.createNewWorkout(workoutToInsert);

  return createdWorkout;
}

function updateOneWorkout() {
  return;
}

function deleteOneWorkout() {
  return;
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
};
