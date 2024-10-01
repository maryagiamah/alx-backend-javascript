export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const val of array) {
    newArray[array.indexOf(val)] = appendString + val;
  }
  return newArray;
}
