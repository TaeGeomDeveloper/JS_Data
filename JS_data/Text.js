
// 문자


// 검색 String.prototype.indexOf()

const result = 'Hello world!'.indexOf('world')
console.log(result);  // 6 

// 길이
const str = '0123'
console.log(str.length)

// 비교
const str2 = 'Hello world!'
console.log(str2.indexOf('Taegeom') !== -1);

// 자르기
const str3 = 'Hello world!'
console.log(str3.slice(6,11));

// 대체하기
const str4 = 'Hello world!'
console.log(str4.replace('world','TaeGeom'));

// 매치
const str5 = 'alf6292@naver.com'
console.log(str5.match(/.+(?=@)/)[0])

// 공백 제거
const str6 = '      Hello world!  '
console.log(str6.trim());

console.log('---------------------------------------------')