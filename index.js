const currentDate = new Date().getFullYear();

class University {
    constructor(name, city, yearOfFoundation, faculties) {
        this.name = name;
        this.city = city;
        this.yearOfFoundation = yearOfFoundation;
        this.faculties = faculties;

        this.students = [];
    }

    addFaculty(facName) {
        this.faculties.push(facName);
        return true;
    }

    registerStudent(studentInstance, facName) {
        if (!this.faculties.includes(facName)) {
            throw new Error("Missing faculty");
        }

        studentInstance.yearOfRegistry = currentDate;
        studentInstance.universityName = this.name;
        studentInstance.facultyName = facName;

        this.students.push({ student: studentInstance, faculty: facName });

        return true;
    }
}

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    isGraduated() {
        return currentDate - this.yearOfRegistry >= 5;
    }
}

const zntu = new University("ZNTU", "Zaporozhye", 1933, [
    "Bio",
    "Math",
    "Phys",
]);
console.log(zntu);

const stud1 = new Student("Homyakov Tolya", 18);
console.log(stud1);
