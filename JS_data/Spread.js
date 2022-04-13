
// 전개 연산자 (Spread) ...

const fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits)
console.log(...fruits)

const toObject = (a,b, ...c) => ({ a, b, c })

console.log(toObject(...fruits))

console.log('---------------------------------------------')