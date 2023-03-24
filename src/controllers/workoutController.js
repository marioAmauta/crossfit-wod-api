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
  const { body } = req;

  if (!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips) {
    return;
  }

  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips
  };

  const createdWorkout = workoutService.createNewWorkout(newWorkout);

  res.status(201).send({
    status: 'OK',
    data: createdWorkout
  });
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
