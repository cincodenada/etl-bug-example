'use strict';

module.exports = {
  extends: 'recommended',
  rules: {
    'simple-unless': {
      allowlist: ['or'],
      maxHelpers: 1
    }
  }
};
