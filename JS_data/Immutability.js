
// 데이터 불변성 (Immutability)

let a = 1
let b = 4

console.log(a,b, a === b)
b = a 
console.log(a, b, a === b)
a = 7
console.log(a, b, a === b)
let c = 1
console.log(b, c, b === c)


// 메모리 값

let n_a = {k : 1}
let n_b = {k : 1 }

console.log(n_a,n_b, n_a === n_b)
n_a.k = 7;
n_b = n_a 
console.log(n_a, n_b, n_a === n_b)
n_a.k = 2
console.log(n_a, n_b, n_a === n_b)
let n_c = n_b
console.log(n_a, n_b, n_c, n_a === n_c)
n_a.k = 9
console.log(n_a, n_b, n_c, n_a === n_c)

console.log('---------------------------------------------')