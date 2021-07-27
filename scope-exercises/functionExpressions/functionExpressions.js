function printRecords(recordIds) {
    var students = recordIds.map(function findById(id) {
        return studentRecords.find(function compare(record) {
            return record.id == id;
        })
    });
    students.sort(function sortByName(student, student2) {
        return student.name.localeCompare(student2.name);
    })
    students.forEach(function print(student) {
        console.log(`${student.name} (${student.id}): ${student.paid ? 'Paid' : 'Not paid'}`)
    })
}

function paidStudentsToEnroll() {
    var students = studentRecords.filter(function notEnrrolled(student) {
        return student.paid && !currentEnrollment.includes(student.id);
    })
    var studentIds = students.map(function getId(student) { return student.id })
    return [...currentEnrollment, ...studentIds];
}

function remindUnpaid(recordIds) {
    var unpaid = recordIds.filter(function unpaid(id) {
        var student = studentRecords.find(function findById(student) {
            return student.id == id;
        })
        return !student.paid;
    })
    printRecords(unpaid);
}


// ********************************

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
    { id: 313, name: "Frank", paid: true, },
    { id: 410, name: "Suzy", paid: true, },
    { id: 709, name: "Brian", paid: false, },
    { id: 105, name: "Henry", paid: false, },
    { id: 502, name: "Mary", paid: true, },
    { id: 664, name: "Bob", paid: false, },
    { id: 250, name: "Peter", paid: true, },
    { id: 375, name: "Sarah", paid: true, },
    { id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

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
