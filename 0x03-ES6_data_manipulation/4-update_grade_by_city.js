export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList.filter((obj) => obj.location === city)
    .map((obj) => {
      const gradeVal = newGrades.find((gradeObj) => (gradeObj.studentId === obj.id));
      return Object.assign(obj, { grade: gradeVal ? gradeVal.grade : 'N/A' });
    });
}
