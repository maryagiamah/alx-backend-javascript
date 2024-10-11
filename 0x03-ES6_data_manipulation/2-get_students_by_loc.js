export default function getStudentsByLocation(studentList, city) {
  return studentList.filter((obj) => obj.location === city);
}
