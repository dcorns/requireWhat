/**
 * Created by dcorns on 11/30/14.
 * To demonstrate an object literal module for use with node.js. Open node shell and enter:
 * "var objectLiteral = require('./objectLiteral')"
 */
'use strict';
module.exports = {
  property1: "This is property one.",
  property2: "This is property two.",
  method1: function(){
    console.log("This is method1 introducing property1: " + this.property1);
  },
  method2: function(){
    console.log("This is method2 introducing property2: " + this.property2);
  }

};
