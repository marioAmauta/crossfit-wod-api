const DB = require('./db.json');
const { saveToDatabase } = require('./utils');

function getAllWorkouts() {
  return DB.workouts;
}

function createNewWorkout(newWorkout) {
  const isAlreadyAdded = DB.workouts.findIndex(workout => workout.name === newWorkout.name);

  if (isAlreadyAdded) return;

  DB.workouts.push(newWorkout);

  saveToDatabase(DB);

  return newWorkout;
}

module.exports = {
  getAllWorkouts,
  createNewWorkout
};
