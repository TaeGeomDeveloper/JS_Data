
// 구조 분해 할당 (Destructuring assignment)
// 비구조화 할당

const user = {
  name : 'TaeGeom',
  age : 27,
  email : 'TaeGeom@gmail.com',
  address : 'USA'
}

const { name, age, email, address = 'korea' } = user

console.log(`사용자의 이름은 ${name} 입니다.`)
console.log(`${name}의 나이는 ${age} 세 입니다.`)
console.log(`${name}의 이메일 주소는 ${email}입니다.`)
console.log(address)

const fruits = ['Apple', 'Banana', 'Cherry']
const [,b,d = 'Mango'] = fruits
console.log( b, d)

console.log('---------------------------------------------')