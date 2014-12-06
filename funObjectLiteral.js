/**
 * Created by dcorns on 12/5/14.
 * To demonstrate an object literal module delivered for use with node.js by a function. Open node shell and enter:
 * "var obj = require('./funObjectLiteral')"
 */
'use strict';
module.exports = function() {
  return {
    property1: "This is property one.",
    property2: "This is property two.",
    method1: function () {
      console.log("This is method1 introducing property1: " + this.property1);
    },
    method2: function () {
      console.log("This is method2 introducing property2: " + this.property2);
    }
  };
};