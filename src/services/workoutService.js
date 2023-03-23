const Workout = require('../database/Workout');

function getAllWorkouts() {
  const allWorkouts = Workout.getAllWorkouts();
  return allWorkouts;
}

function getOneWorkout() {
  return;
}

function createNewWorkout() {
  return;
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
