/**
 * Created by dcorns on 12/5/14.
 */
'use strict';
module.exports = function() {

  var property1 = "This is property one.",
    property2= "This is property two.";

  return {
    method1: function () {
      console.log("This is method1 introducing property1: " + property1);
    },
    method2: function () {
      console.log("This is method2 introducing property2: " + property2);
    }
  };
};