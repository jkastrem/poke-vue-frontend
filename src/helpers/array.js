export function sortArrayByField(array, field, direction = 'up') {
  function compare(a, b) {
    if (a[field] < b[field]) {
      return direction === 'up' ? -1 : 1
    }
    if (a[field] > b[field]) {
      return direction === 'up' ? 1 : -1
    }
    return 0
  }

  return array.sort(compare)
}

export function filterArrayByField(array, field, from, to) {
  return array.filter((item) => {
    return from === '' ? true : item[field] >= from &&
           to === '' ? true : item[field] <= to
  })
}
