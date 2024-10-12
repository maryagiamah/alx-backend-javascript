export default function updateUniqueItems(newMap) {
  if (!newMap || (newMap instanceof Map) === false) {
    throw new Error('Cannot proces');
  } else {
    for (const [key, val] of newMap) {
      newMap.set(key, val === 1 ? 100 : val);
    }
    return newMap;
  }
}
