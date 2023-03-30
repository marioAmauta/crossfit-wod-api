const express = require('express');
const apicache = require('apicache');
const workoutController = require('../../controllers/workoutController');
const recordController = require('../../controllers/recordController');

const router = express.Router();
const cache = apicache.middleware;

/**
 * @openapi
 * /api/v1/workouts:
 *  get:
 *    tags:
 *      - Workouts
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                  example: OK
 *                data:
 *                  type: array
 *                  items:
 *                    type: object
 */

router
  .get('/', cache('2 minutes'), workoutController.getAllWorkouts)
  .get('/:workoutId', workoutController.getOneWorkout)
  .get('/:workoutId/records', recordController.getRecordForWorkout)
  .post('/:workoutId/records', recordController.createNewRecord)
  .post('/', workoutController.createNewWorkout)
  .patch('/:workoutId', workoutController.updateOneWorkout)
  .delete('/:workoutId', workoutController.deleteOneWorkout);

module.exports = router;
