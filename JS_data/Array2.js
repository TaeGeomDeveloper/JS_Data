
// 배열 2


// 트루 값만 반환 한다 .filter()

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

const a = numbers.map(number => number < 3 )
console.log(a)

const b = numbers.filter(number => number < 3)
console.log(b)


// 몇번째에 존재하는지 검색 .find() .findIndex()

const c = fruits.find(fruit => /^B/.test(fruit) ) // B로 시작하는 정규식 표현
console.log(c)

const d = fruits.findIndex(fruit => /^C/.test(fruit) ) // B로 시작하는 정규식 표현
console.log(d)


// 데이터가 들어있는지 확인 한다. includes()

const e = numbers.includes(3)
console.log(e)


// 데이터 삽입 push() , unshift()

numbers.push(5)
console.log(numbers)

numbers.unshift(0)
console.log(numbers)


// 배열을 반대로 수정 한다. reverse()

numbers.reverse()
fruits.reverse()

console.log(numbers)
console.log(fruits)


// splice()

numbers.splice(0,2)
console.log(numbers)

console.log('---------------------------------------------')