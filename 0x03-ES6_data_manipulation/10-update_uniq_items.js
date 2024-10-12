export default function updateUniqueItems(newMap) {
  if (newMap || (newMap instanceof Map)) {
    for (const [key, val] of newMap) {
      newMap.set(key, val === 1 ? 100 : val);
    }
    return newMap;
  }
  throw new Error('Cannot proces');
}
