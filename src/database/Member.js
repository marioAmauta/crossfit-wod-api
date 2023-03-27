const DB = require('./db.json');

function getOneMember(memberId) {
  try {
    const member = DB.members.filter(member => member.id === memberId);

    const { id, name, gender, dateOfBirth } = member[0];

    const memberPublicData = {
      id,
      name,
      gender,
      dateOfBirth
    };

    return memberPublicData;
  } catch (error) {
    throw {
      status: 400,
      message: `Can't find member with the id '${memberId}'`
    };
  }
}

module.exports = {
  getOneMember
};
