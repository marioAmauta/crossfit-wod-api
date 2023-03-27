const { v4: uuid } = require('uuid');
const Record = require('../database/Record');

function getRecordForWorkout(workoutId) {
  try {
    const record = Record.getRecordForWorkout(workoutId);
    return record;
  } catch (error) {
    throw error;
  }
}

function createNewRecord(newRecord) {
  const recordToInsert = {
    id: uuid(),
    ...newRecord,
    member: '/members/:memberId'
  };

  try {
    const createdRecord = Record.createNewRecord(recordToInsert);

    return createdRecord;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getRecordForWorkout,
  createNewRecord
};
