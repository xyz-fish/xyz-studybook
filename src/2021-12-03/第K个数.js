// 3, 5, 7
// 3,  5,  7,  9,  15, 21, 25,  27, 35, 45, 49, 75， 81， 125，
// 0,  1,  2,  0 * 0, 0 * 1, 0 * 2, 1 * 1, 0*0*0, 1*2, 0*0*1, 2*2,
const factor = [3, 5, 7]
function getKthMagicNumber(k) {
  if (k <= 2) return factor[k]
  let i = 3
  let currMax = Math.pow(factor[0], 2)

  let f = (s = t = 0)
  console.log(f, s, t)
}

getKthMagicNumber(4)
