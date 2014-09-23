module.exports = function(helper) {
  var protocolInfo, pulsesToBinaryMapping;
  pulsesToBinaryMapping = {
    '01': '0',
    '02': '1',
    '03': ''
  };
  return protocolInfo = {
    name: 'pir1',
    type: 'pir',
    values: {
      presence: {
        type: "boolean"
      }
    },
    models: [],
    pulseLengths: [413, 668, 1644, 16936],
    pulseCount: 50,
    decodePulses: function(pulses) {
      var binary, result;
      binary = helper.map(pulses, pulsesToBinaryMapping);
      console.log(binary);
      return result = {
        presence: true
      };
    }
  };
};