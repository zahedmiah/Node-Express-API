const names = require("./4-names") // files DON'T require curly braces
const {sayHi} = require("./5-utils") // requires curly braces
const data = require('./6-alternative-flavor')

console.log(data)
require("./7-mind-grenade")


sayHi("susan")
sayHi(names.john)
sayHi(names.peter)