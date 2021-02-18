const classA = [
    {
        name: "Pedro",
        grade: 3
    },

    {
        name: "Bruno",
        grade: 10
    },

    {
        name: "Mateus",
        grade: 2
    },

    {
        name: "student Novo",
        grade: 7
    }
];

const classB = [
    {
        name: "Mauro",
        grade: 8
    },

    {
        name: "Gil",
        grade: 10
    },

    {
        name: "Amolfadinhas",
        grade: 8
    },

    {
        name: "Novo student",
        grade: 4
    }
];

function calculateAverage(students) {
    let sum = 0;
    
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length;
    return average
}





function sendMessage(average, turma) {
    if (average > 7) {
        console.log(`Congrats students of ${turma} the grade of yourselves was ${average}`);
    } else {
        console.log(`Unfortunately the average of the class ${turma} is lower then 7`);
    }
}




function markAsFlunked(student) {
    student.flunked = false;
    if (student.grade < 7) {
        student.flunked = true;
    }
}


function sendMenssageflunked(student) {
    if (student.flunked) {
        console.log(`The student ${student.name} be flunked`);
    }
}

function studentsflunkeds(students) {
    for (let student of students) {
        markAsFlunked(student);
        sendMenssageflunked(student)
    }
}

const average1 = calculateAverage(classA);
const average2 = calculateAverage(classB);

sendMessage(average1, "Class A");
sendMessage(average2, "Class B");

studentsflunkeds(classA);
studentsflunkeds(classB);