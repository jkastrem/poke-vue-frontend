export function removeObjectFromArrayByKey(value, key, array) {
  return array.filter(item => item[key] !== value)
}
