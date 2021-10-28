const insertSort = require('../insertSort')

const case01 = [5, 4, 3, 2, 1, -1]
const case02 = [4, 3, 1, 2, 5, 6, -1, 878, 3]

test('insert sort: [1, 2, 3, 4, 5]', () => {
  expect(insertSort(case01)).toStrictEqual([-1, 1, 2, 3, 4, 5])
})
