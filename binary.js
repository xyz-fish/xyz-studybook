function converBinary(arr) {
  let root

  function insertNode(p, c) {
    if (!c || c.val === '') return

    console.log(c.val, p.val)

    if (p.left === null) {
      p.left = c
    } else {
      if (p.right === null) {
        p.right = c
        if (p.right) {
          return name
        }
      } else {
        insertNode(p.left, c)
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let node = {
      val: arr[i],
      left: null,
      right: null
    }
    if (root) {
      insertNode(root, node)
    } else {
      root = node
    }
  }

  return root
}

const arr = [1, 2, 3, 4, 5, 6, 7]

console.log(JSON.stringify(converBinary(arr)))
console.log(JSON.stringify(converBinaryO(arr)))
const a = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: { val: 6, left: null, right: null },
      right: { val: 7, left: null, right: null }
    },
    right: { val: 5, left: null, right: null }
  },
  right: { val: 3, left: null, right: null }
}

function converBinaryO(arr) {
  let root

  function insertNode(parentNode, childNode) {
    if (!childNode || childNode.val == '') return

    if (childNode.val < parentNode.val) {
      if (parentNode.left === null) {
        parentNode.left = childNode
      } else {
        insertNode(parentNode.left, childNode)
      }
    } else {
      if (parentNode.right == null) {
        parentNode.right = childNode
      } else {
        insertNode(parentNode.right, childNode)
      }
    }
  }

  arr.forEach((val) => {
    let node = {
      val,
      left: null,
      right: null
    }
    if (root) insertNode(root, node)
    else root = node
  })

  return root
}
