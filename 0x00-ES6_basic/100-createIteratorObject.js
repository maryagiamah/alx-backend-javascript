export default function* createIteratorObject(report) {
  let iterCount = 0;
  for (const vals of Object.values(report.allEmployees)) {
    for (const name of vals) {
      iterCount += 1;
      yield name;
    }
  }
  return iterCount;
}
