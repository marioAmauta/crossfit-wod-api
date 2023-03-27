const Member = require('../database/Member');

function getOneMember(memberId) {
  try {
    const member = Member.getOneMember(memberId);
    return member;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getOneMember
};
