function buddyStrings(s, goal) {
  let sn = s.length
  if (sn !== goal.length) return false

  let prevIndex = 0

  for (let i = 0; i < sn; i++) {
    if (s[i] === goal[i]) {
      if ((i > 0) & (s[i] === s[i - 1])) return true
      return false
    } else {
      prevIndex = i
    }
  }
}
