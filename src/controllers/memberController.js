const memberService = require('../services/memberService');

function getOneMember(req, res) {
  const { memberId } = req.params;

  if (!memberId) {
    res.status(400).send({
      status: 'FAILED',
      data: {
        error: "Parameter ':memberId' can not be empty"
      }
    });
  }

  try {
    const member = memberService.getOneMember(memberId);

    res.send({
      status: 'OK',
      data: member ? member : `There is no member with the id '${memberId}'`
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
  getOneMember
};
