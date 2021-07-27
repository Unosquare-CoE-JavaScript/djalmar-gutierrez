"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var currentEnrollment = [410, 105, 664, 375];
var studentRecords = [{
  id: 313,
  name: "Frank",
  paid: true
}, {
  id: 410,
  name: "Suzy",
  paid: true
}, {
  id: 709,
  name: "Brian",
  paid: false
}, {
  id: 105,
  name: "Henry",
  paid: false
}, {
  id: 502,
  name: "Mary",
  paid: true
}, {
  id: 664,
  name: "Bob",
  paid: false
}, {
  id: 250,
  name: "Peter",
  paid: true
}, {
  id: 375,
  name: "Sarah",
  paid: true
}, {
  id: 867,
  name: "Greg",
  paid: false
}];
printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

function getStudentFromId(studentId) {
  return studentRecords.find(matchId);

  function matchId(record) {
    return record.id == studentId;
  }
}

function sortByNameAsc(record1, record2) {
  if (record1.name < record2.name) return -1;else if (record1.name > record2.name) return 1;else return 0;
}

function needToEnroll(record) {
  return record.paid && !currentEnrollment.includes(record.id);
}

function getStudentId(record) {
  return record.id;
}

function printRecords(recordIds) {
  var records = recordIds.map(getStudentFromId);
  records.sort(sortByNameAsc);
  records.forEach(printRecord);
}

function printRecord(record) {
  console.log("".concat(record.name, " (").concat(record.id, "): ").concat(record.paid ? "Paid" : "Not Paid"));
}

function paidStudentsToEnroll() {
  var recordsToEnroll = studentRecords.filter(needToEnroll);
  var idsToEnroll = recordsToEnroll.map(getStudentId);
  return [].concat(_toConsumableArray(currentEnrollment), _toConsumableArray(idsToEnroll));
}

function remindUnpaid(recordIds) {
  var unpaidIds = recordIds.filter(notYetPaid);
  printRecords(unpaidIds);
}

function notYetPaid(studentId) {
  var record = getStudentFromId(studentId);
  return !record.paid;
} // ********************************

/*
    Bob (664): Not Paid
    Henry (105): Not Paid
    Sarah (375): Paid
    Suzy (410): Paid
    ----
    Bob (664): Not Paid
    Frank (313): Paid
    Henry (105): Not Paid
    Mary (502): Paid
    Peter (250): Paid
    Sarah (375): Paid
    Suzy (410): Paid
    ----
    Bob (664): Not Paid
    Henry (105): Not Paid
*/