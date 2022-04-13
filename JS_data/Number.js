
// 숫자와 수학

const pi = 3.141592653589793;
console.log(pi);

// 소수점 2자리 까지만 입력받기 (문자)
const str = pi.toFixed(2)
console.log(str);
console.log(typeof str);

const integer = parseInt(str)
const float = parseFloat(str)

console.log(integer)
console.log(float)
console.log(typeof integer, typeof float)


// 절대값
console.log('abs : ', Math.abs(-12))

// 최소값
console.log('min : ', Math.min(2,8))

// 최대값
console.log('max : ', Math.max(2,8))

// 소수 올림
console.log('ceil : ', Math.ceil(3.14))

// 소수 내림
console.log('floor : ', Math.floor(3.14))

// 소수 반올림
console.log('round : ', Math.round(3.14))

// 랜덤
console.log('random : ', Math.round(Math.random()* 10))

console.log('---------------------------------------------')