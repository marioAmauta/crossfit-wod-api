const DB = require('./db.json');
const { saveToDatabase } = require('./utils');

function getRecordForWorkout(workoutId) {
  try {
    const record = DB.records.filter(record => record.workout === workoutId);

    if (!record) {
      throw {
        status: 400,
        message: `Can't find workout with the id ${workoutId}`
      };
    }

    return record;
  } catch (error) {
    throw {
      status: error?.status || 500,
      message: error?.message || error
    };
  }
}

function createNewRecord(newRecord) {
  try {
    DB.records.push(newRecord);

    saveToDatabase(DB);

    return newRecord;
  } catch (error) {
    throw {
      status: 500,
      message: error?.message || error
    };
  }
}

module.exports = {
  getRecordForWorkout,
  createNewRecord
};
