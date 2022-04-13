
// 객체

// 데이터를 합치기 object.assign()
const userAge = {
  // key: value
  name : 'TaeGeom',
  age : 27
}

const userEmail = {
  name: 'TaeGeom',
  email : 'TaeGeom@gmail.com'
}

const target = Object.assign({},userAge, userEmail)
console.log(target)
console.log(userAge)
console.log(target === userAge)


// Object Key

const user = {
  name : 'TaeGeom',
  age : 27,
  email : 'TaeGeom@gmail.com'
}

const keys = Object.keys(user)
console.log(keys)

console.log(user['email'])

const values = keys.map(key => user[key])
console.log(values)

console.log('---------------------------------------------')