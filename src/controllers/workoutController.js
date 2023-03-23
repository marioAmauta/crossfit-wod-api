const workoutService = require('../services/workoutService');

function getAllWorkouts(req, res) {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send({
    status: 'OK',
    data: allWorkouts
  });
}

function getOneWorkout(req, res) {
  const workout = workoutService.getOneWorkout();
  res.send(`Get an existing workout with this id: ${req.params.workoutId}`);
}

function createNewWorkout(req, res) {
  const createdWorkout = workoutService.createNewWorkout();
  res.send('Create a new workout');
}

function updateOneWorkout(req, res) {
  const updatedWorkout = workoutService.updateOneWorkout();
  res.send(`Update an existing workout with this id: ${req.params.workoutId}`);
}

function deleteOneWorkout(req, res) {
  workoutService.deleteOneWorkout();
  res.send(`Delete an existing workout with this id: ${req.params.workoutId}`);
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
};
