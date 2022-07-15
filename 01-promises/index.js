
// the call stack

const multiply = (x, y) => x * y

const square = (x) => multiply(x, x)

const isRightTriangle = (a, b, c) => square(b) + square(b) === square(c)

isRightTriangle(3, 4, 5)
