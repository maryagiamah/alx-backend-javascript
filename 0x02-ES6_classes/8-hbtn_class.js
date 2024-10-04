export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // When class is cast in String and Value
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    } if (hint === 'string') {
      return this._location;
    }
    return this._location;
  }
}
