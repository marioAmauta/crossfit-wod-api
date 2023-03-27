const recordService = require('../services/recordService');

function getRecordForWorkout(req, res) {
  const { workoutId } = req.params;

  if (!workoutId) {
    res.status(400).send({
      status: 'FAILED',
      data: {
        error: "Parameter ':workoutId' can not be empty"
      }
    });

    return;
  }

  try {
    const record = recordService.getRecordForWorkout(workoutId);

    res.send({
      status: 'OK',
      data: record.length > 0 ? record : `There is no record for this id '${workoutId}'`
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

function createNewRecord(req, res) {
  const {
    params: { workoutId },
    body: { record, memberId }
  } = req;

  if (!record) {
    res.status(400).send({
      status: 'FAILED',
      data: {
        error: 'A record is necessary to continue'
      }
    });

    return;
  }

  const newRecord = {
    workout: workoutId,
    record,
    memberId
  };

  try {
    const createdRecord = recordService.createNewRecord(newRecord);

    res.status(201).send({
      status: 'OK',
      data: createdRecord
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
  getRecordForWorkout,
  createNewRecord
};
