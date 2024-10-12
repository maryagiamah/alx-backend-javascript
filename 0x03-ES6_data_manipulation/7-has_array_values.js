export default function hasValuesFromArray(newSet, arrayVals) {
  for (const val of arrayVals) {
    if (newSet.has(val) === false) {
      return false;
    }
  }
  return true;
}
