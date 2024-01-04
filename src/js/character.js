export default function orderByProps(obj, keys) {
  const arr1 = [];
  let arr2 = [];
  /* eslint-disable-next-line */
  for (const key of keys) {
    arr1.push({ key, value: obj[key] });
  }
  /* eslint-disable-next-line */
  for (const key in obj) {
    /* eslint-disable-next-line */
    if (obj.hasOwnProperty(key) && !keys.includes(key)) {
      arr2.push({ key, value: obj[key] });
    }
  }
  /* eslint-disable-next-line */
  arr2 = arr2.sort((a, b) => {
    if (a.key < b.key) { return -1; }
  });
  const result = [...arr1, ...arr2];
  return result;
}
