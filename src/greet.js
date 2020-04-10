function greet (name) {
  var greeting
  if (name == null) greeting = 'Hello, my friend.'
  else if (name instanceof Array) {
    if (name.length === 1) return greet(name[0])
    var escape = true
    name.forEach(function (n) {
      var newNames = n.split(', ')
      if (newNames.length !== 1) {
        if (n[0] !== '"' || n[n.length - 1] !== '"') escape = false
        else {
          name[name.indexOf(n)] = n.substring(1, n.length - 1)
        }
      }
    })
    if (escape === false) {
      name.forEach(function (n) {
        var newNames = n.split(', ')
        if (newNames.length !== 1) {
          name.splice(name.indexOf(n), 1)
          newNames.forEach(n2 => name.push(n2))
          return greet(name)
        }
      })
    }
    var upper = []
    var nonUpper = []
    for (let i = 0; i < name.length; i++) {
      if (name[i].toUpperCase() === name[i]) upper.push(name[i])
      else nonUpper.push(name[i])
    }
    if (upper.length === 0) {
      if (name.length === 2) greeting = `Hello, ${name[0]} and ${name[1]}.`
      else {
        greeting = 'Hello, '
        for (let i = 0; i < name.length - 1; i++) {
          greeting += `${name[i]}, `
        }
        greeting += `and ${name[name.length - 1]}.`
      }
    } else if (nonUpper.length === 0) {
      if (name.length === 2) greeting = `HELLO ${name[0]} AND ${name[1]}.`
      else {
        greeting = 'HELLO '
        for (let i = 0; i < name.length - 1; i++) {
          greeting += `${name[i]}, `
        }
        greeting += `AND ${name[name.length - 1]}!`
      }
    } else {
      var part1 = greet(nonUpper)
      var part2 = greet(upper)
      greeting = `${part1} AND ${part2}`
    }
  } else if (name.toUpperCase() === name) greeting = 'HELLO ' + name + '!'
  else greeting = 'Hello, ' + name + '.'
  return greeting
}

module.exports = greet
