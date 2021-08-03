const config = require('../config');
const Items = require('./items')(config);

module.exports = {
  Items,
}