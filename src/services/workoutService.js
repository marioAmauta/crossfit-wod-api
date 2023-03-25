const { v4: uuid } = require('uuid');
const Workout = require('../database/Workout');

function getAllWorkouts() {
  const allWorkouts = Workout.getAllWorkouts();

  return allWorkouts;
}

function getOneWorkout(workoutId) {
  const workout = Workout.getOneWorkout(workoutId);

  return workout;
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

function updateOneWorkout(workoutId, changes) {
  const updatedWorkout = Workout.updateOneWorkout(workoutId, changes);

  return updatedWorkout;
}

function deleteOneWorkout(workoutId) {
  Workout.deleteOneWorkout(workoutId);
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
};
