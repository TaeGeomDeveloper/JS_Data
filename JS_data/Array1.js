
// 배열

const { first } = require("lodash")

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

for(let i = 0; i < numbers.length; i++) {
  console.log('숫자 : '+`${numbers[i]}`)
}
for(let j = 0; j < fruits.length; j++) {
  console.log('과일 : '+fruits[j])
}


// 길이 .length

console.log(numbers.length)
console.log(fruits.length)

// 배열 합치기 concat (수정되지 않음)

console.log(numbers.concat(fruits))


// 갯수 만큼 반복 하기 forEach()

// fruits.forEach(function(element, index, array) {
//   console.log(element, index, array)
// })

fruits.forEach(function(fruits, i){
  console.log(fruits,i)
})


// 갯수 만큼 반복 하지만 새로운 메소드 반환 하여 사용 .map()

const b = fruits.map(function (fruit, index){
  //return `${fruit}-${index}`
  return {
    id: index,
    name: fruit
  }
})
console.log(b)

const c = fruits.map((fruit, index) => ({
  id: index,
  name: fruit
}))
console.log(c)


