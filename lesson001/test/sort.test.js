const selectSort = require('../selectSort')
const insertSort = require('../insertSort')

const case01 = [5, 4, 3, 2, 1, -1]
const case02 = [4, 3, 1, 2, 5, 6, -1, 878, 3]

test('insert sort', () => {
  expect(insertSort(case01)).toStrictEqual([-1, 1, 2, 3, 4, 5])
  expect(insertSort(case02)).toStrictEqual([-1, 1, 2, 3, 3, 4, 5, 6, 878])
})

test('select sort', () => {
  expect(selectSort(case01)).toStrictEqual([-1, 1, 2, 3, 4, 5])
  expect(selectSort(case02)).toStrictEqual([-1, 1, 2, 3, 3, 4, 5, 6, 878])
})
