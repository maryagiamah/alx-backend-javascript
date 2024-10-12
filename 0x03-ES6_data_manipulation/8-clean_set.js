export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  let string = '';
  for (let val of set.values()) {
    if (val.startsWith(startString)) {
      val = val.substr(startString.length);
      string = string ? string.concat('-', val) : string.concat(val);
    }
  }
  return string;
}
