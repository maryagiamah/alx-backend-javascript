export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  let string = '';
  for (let val of set.values()) {
    if (typeof val === 'string' && val.startsWith(startString)) {
      val = val.substr(startString.length);
      string = string ? string.concat('-', val) : string.concat(val);
    }
  }
  return string;
}
