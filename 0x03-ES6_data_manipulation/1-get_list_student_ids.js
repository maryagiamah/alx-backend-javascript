export default function getListStudentIds(arrayObjs) {
  if (Array.isArray(arrayObjs) !== true) {
    return [];
  }
  return arrayObjs.map((obj) => obj.id);
}
