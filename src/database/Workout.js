const DB = require('./db.json');

function getAllWorkouts() {
  return DB.workouts;
}

module.exports = {
  getAllWorkouts
};
