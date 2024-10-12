export default function createInt8TypedArray(length, position, value) {
  try {
    const newBuffer = new ArrayBuffer(length);
    const view = new DataView(newBuffer);
    view.setInt8(position, value);
    return view;
  } catch (err) {
    throw new Error('Position outside range');
  }
}
