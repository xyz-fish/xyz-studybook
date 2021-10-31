const selectSort = require('../selectSort')
const insertSort = require('../insertSort')
const bubbleSort = require('../bubbleSort')
const quickSort = require('../quickSort')
const shellSort = require('../shellSort')

const sortMap = [
  {
    type: 'select',
    sort: selectSort
  },
  {
    type: 'insert',
    sort: insertSort
  },
  {
    type: 'bubble',
    sort: bubbleSort
  },
  {
    type: 'shell',
    sort: shellSort
  },
  {
    type: 'quick',
    sort: quickSort
  }
]

const cases = [
  {
    input: [5, 4, 3, 2, 1, -1],
    output: [-1, 1, 2, 3, 4, 5]
  },
  {
    input: [4, 3, 1, 2, 5, 6, -1, 878, 3],
    output: [-1, 1, 2, 3, 3, 4, 5, 6, 878]
  }
]

sortMap.forEach((element) => {
  cases.forEach((c) => {
    test(`${element.type} sort`, () => {
      const sort = element.sort
      expect(sort(c.input)).toStrictEqual(c.output)
    })
  })
})
