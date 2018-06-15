'use strict';

/**
 * Kills parcel when stdin closes
 * @param bindler
 * @return nothing
 */
module.exports = function(_bundler) {
  process.stdin.on('end', () => process.exit(0));
  process.stdin.resume();
};
