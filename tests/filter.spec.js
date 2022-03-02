import { expect, test } from 'vitest'
import { filterArrayByField } from '../src/helpers/array'

test('it should be return array from 5 to 10 including', () => {
  const willFilterArray = [
    { id: 1, field: 15 },
    { id: 2, field: 5 },
    { id: 3, field: 7 },
  ]

  expect(filterArrayByField(willFilterArray, 'field', 5, 10)).toEqual(
    [
      { id: 2, field: 5 },
      { id: 3, field: 7 },
    ],
  )
})
