var student = require('./student')
var teacher = require('./teacher')

function add (students,teachers){
    teacher.add(teachers)

    students.forEach(function(item,index){
        student.add(item)
    })
}

exports.add = add

module.export = add