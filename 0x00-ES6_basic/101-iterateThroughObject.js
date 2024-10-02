export default function iterateThroughObject(reportWithIterator) {
  let join = '';
  for (const name of reportWithIterator) {
    join = join.concat(join ? ' | ' : '', name);
  }
  return join;
}
