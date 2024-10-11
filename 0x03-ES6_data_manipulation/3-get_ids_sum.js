export default function getStudentIdsSum(studentList) {
  return studentList.reduce((total, obj) => total + obj.id, 0);
}
