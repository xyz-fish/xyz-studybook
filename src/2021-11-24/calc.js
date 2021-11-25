function calculate(s) {
  const stack = []
  const num = 0
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '+':
      case '-':
        stack.push(s[i])
        break
      case '*':
        stack.push(stack.pop() * num)
      case '/':
        stack.push((stack.pop() / num) | 0)
    }
  }
}
