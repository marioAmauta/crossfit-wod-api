const workoutService = require('../services/workoutService');

function getAllWorkouts(req, res) {
  const { mode } = req.query;

  try {
    const allWorkouts = workoutService.getAllWorkouts({ mode });

    res.send({
      status: 'OK',
      data: allWorkouts
    });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: 'FAILED',
      data: {
        error: error?.message || error
      }
    });
  }
}

function getOneWorkout(req, res) {
  const { workoutId } = req.params;

  if (!workoutId) {
    res.status(400).send({
      status: 'FAILED',
      data: {
        error: "Parameter ':workoutId' can not be empty"
      }
    });
  }

  try {
    const workout = workoutService.getOneWorkout(workoutId);

    res.send({
      status: 'OK',
      data: workout
    });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: 'FAILED',
      data: {
        error: error?.message || error
      }
    });
  }
}

function createNewWorkout(req, res) {
  const { name, mode, equipment, exercises, trainerTips } = req.body;

  if (!name || !mode || !equipment || !exercises || !trainerTips) {
    res.status(400).send({
      status: 'FAILED',
      data: {
        error:
          "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'"
      }
    });

    return;
  }

  const newWorkout = {
    name,
    mode,
    equipment,
    exercises,
    trainerTips
  };

  try {
    const createdWorkout = workoutService.createNewWorkout(newWorkout);

    res.status(201).send({
      status: 'OK',
      data: createdWorkout
    });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: 'FAILED',
      data: {
        error: error?.message || error
      }
    });
  }
}

function updateOneWorkout(req, res) {
  const {
    body,
    params: { workoutId }
  } = req;

  if (!workoutId) {
    res.status(400).send({
      status: 'FAILED',
      data: {
        error: "Parameter ':workoutId' can not be empty"
      }
    });
  }

  try {
    const updatedWorkout = workoutService.updateOneWorkout(workoutId, body);

    res.send({
      status: 'OK',
      data: updatedWorkout
    });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: 'FAILED',
      data: {
        error: error?.message || error
      }
    });
  }
}

function deleteOneWorkout(req, res) {
  const { workoutId } = req.params;

  if (!workoutId) {
    res.status(400).send({
      data: {
        error: "Parameter ':workoutId' can not be empty"
      }
    });
  }

  try {
    workoutService.deleteOneWorkout(workoutId);

    res.status(204).send({
      status: 'OK'
    });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: 'FAILED',
      data: {
        error: error?.message || error
      }
    });
  }
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
};
