class Student {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.enrolledCourses = [];
  }

  // Method to enroll in a course
  enrollCourse(course) {
    this.enrolledCourses.push(course);
  }

  // Method to display enrolled courses
  displayEnrolledCourses() {
    console.log(`${this.name}'s enrolled courses:`);
    for (const course of this.enrolledCourses) {
      console.log(course);
    }
  }
}

class Admission {
  constructor() {
    this.students = [];
    this.courses = [];
  }

  // Method to admit a student
  admitStudent(name, id) {
    const student = new Student(name, id);
    this.students.push(student);
    return student;
  }

  // Method to create a new course
  createCourse(courseName) {
    this.courses.push(courseName);
  }

  // Method to display enrolled students
  displayEnrolledStudents() {
    console.log("Enrolled Students:");
    for (const student of this.students) {
      console.log(`Name: ${student.name}, ID: ${student.id}`);
    }
  }
}

// Example usage:
const admissionSystem = new Admission();

// Create courses
admissionSystem.createCourse("Math");
admissionSystem.createCourse("Science");
admissionSystem.createCourse("History");

// Admit students
const student1 = admissionSystem.admitStudent("Alice", 101);
const student2 = admissionSystem.admitStudent("Bob", 102);

// Enroll students in courses
student1.enrollCourse("Math");
student1.enrollCourse("Science");
student2.enrollCourse("History");

// Display enrolled students and their courses
admissionSystem.displayEnrolledStudents();
student1.displayEnrolledCourses();
student2.displayEnrolledCourses();
