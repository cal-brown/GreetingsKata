const greet = require('./greet')

test('Given greet(name), should return "Hello, name."', () => {
  const name = 'Bob'

  const expected = 'Hello, Bob.'

  const actual = greet(name)

  expect(actual).toEqual(expected)
})

test('Given greet(null), should return "Hello, my friend."', () => {
  const name = null

  const expected = 'Hello, my friend.'

  const actual = greet(name)

  expect(actual).toEqual(expected)
})

test('Given greet(NAME) where NAME is all uppercase, should return "HELLO, NAME!"', () => {
  const name = 'JERRY'

  const expected = 'HELLO JERRY!'

  const actual = greet(name)

  expect(actual).toEqual(expected)
})

test('Given greet([name1, name2]), should return "Hello, name1 and name2."', () => {
  const names = ['Jane', 'Jill']

  const expected = 'Hello, Jane and Jill.'

  const actual = greet(names)

  expect(actual).toEqual(expected)
})

test('Given greet([name1, name2, ...nameN]), should return "Hello, name1, name2,..., and nameN."', () => {
  const names = ['Jane', 'Jill', 'Bob']

  const expected = 'Hello, Jane, Jill, and Bob.'

  const actual = greet(names)

  expect(actual).toEqual(expected)
})

test('Allow mixing of normal and shouted names by separating the response into two greetings', () => {
  const names = ['Jane', 'Jill', 'BOB']

  const expected = 'Hello, Jane and Jill. AND HELLO BOB!'

  const actual = greet(names)

  expect(actual).toEqual(expected)
})

test('If any entries in name are a string containing a comma, split it as its own input', () => {
  const names = ['Bob', 'Charlie, Dianne']

  const expected = 'Hello, Bob, Charlie, and Dianne.'

  const actual = greet(names)

  expect(actual).toEqual(expected)
})

test('Allow the input to escape intentional commas with double quotes surrounding the entry', () => {
  const names = ['Bob', '"Charlie, Dianne"']

  const expected = 'Hello, Bob and Charlie, Dianne.'

  const actual = greet(names)

  expect(actual).toEqual(expected)
})
