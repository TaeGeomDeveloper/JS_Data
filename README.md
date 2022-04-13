# 자바 스크립트 데이터

자바스크립트 데이터 공부


## 1. 문자
< Text.js >

- 검색 **indexof** ,비교  
	```javascript
		const result = 'Hello world!'.indexOf('world')
	``` 
- 길이 **length**      
	```javascript
		console.log(str.length)
	``` 
- 자르기 **slice** , 대채하기 **replace** 
	```javascript
		console.log(str3.slice(6,11));
		console.log(str4.replace('world','TaeGeom'));
	``` 	
- 매치 **match**  
	```javascript
		console.log(str5.match(/.+(?=@)/)[0])
	``` 
- 공백 **trim**  
	```javascript
		console.log(str6.trim());
	``` 

## 2. 숫자와 수학
< Number.js >

- 소수점 **toFixed**
	```javascript
		const str = pi.toFixed(2)
	``` 
- 정수형 **parseInt**, 소수형 **parseFloat**
	```javascript
		const integer = parseInt(str)
		const float = parseFloat(str)
	``` 
- 절대값 **Math.abs**
	```javascript
		console.log('abs : ', Math.abs(-12))
	``` 
- 최소값 **Math.min**
	```javascript
		console.log('min : ', Math.min(2,8))
	``` 
- 최대값 **Math.max**
	```javascript
		console.log('max : ', Math.max(2,8))
	``` 
- 소수올림 **Math.ceil**
	```javascript
		console.log('ceil : ', Math.ceil(3.14))
	``` 
- 소수내림 **Math.floor**
	```javascript
		console.log('floor : ', Math.floor(3.14))
	``` 
- 소수 반올리 **Math.round**
	```javascript
		console.log('round : ', Math.round(3.14))
	``` 
- 랜덤	**Math.round**
	```javascript
		console.log('random : ', Math.round(Math.random()* 10))
	``` 
	
## 3. 배열 
< Array1.js > < Array2.js >

- 길이 **length**
	```javascript
		console.log(numbers.length)
	``` 
- 합치기 **concat**
	```javascript
		console.log(numbers.concat(fruits))
	``` 
- 갯수만큼 반복 **forEach**
	```javascript
		fruits.forEach(function(fruits, i){
		  console.log(fruits,i)
		})
	``` 
- 반복후 새로운 매소드로 반환 **map**
	```javascript
		const b = fruits.map(function (fruit, index){
 		 //return `${fruit}-${index}`
		  return {
		    id: index,
		    name: fruit
		  }
		})
	``` 
- 트루 값만 반환 **filter**
	```javascript
		const b = numbers.filter(number => number < 3)
	``` 
- 몇번째 인지 검색 **find**, **findIndex**
	```javascript
		const c = fruits.find(fruit => /^B/.test(fruit) ) // B로 시작하는 정규식 표현
		const d = fruits.findIndex(fruit => /^C/.test(fruit) ) // B로 시작하는 정규식 표현
	``` 
- 데이터 확인 **includes**
	```javascript
		const e = numbers.includes(3)
	``` 
- 데이터 삽입 **push**, **unshift()**
	```javascript
		numbers.push(5)
		numbers.unshift(0)
	``` 
- 배열 반대로 수정 **reverse**
	```javascript
		numbers.reverse()
	``` 
- 자르기 **splice**
	```javascript
		numbers.splice(0,2)
	``` 

## 4. 객체
< Object.js >

- 데이터 합치기 **Object.assign**
	```javascript
		const target = Object.assign({},userAge, userEmail)
	```
- 키 값 전달 **Object.keys**
	```javascript
		const keys = Object.keys(user)
	```

## 5. 구조 분해 할당 (Destructuring assignment)
< Destructuring.js >
- 비 구조 와 구조 분해  
	```javascript
		const fruits = ['Apple', 'Banana', 'Cherry']
		const [,b,d = 'Mango'] = fruits
		console.log( b, d)
	```
	
## 6. 전개 연산자 (Spread)
< Spread.js >
- ...Spread  
	```javascript
		const fruits = ['Apple', 'Banana', 'Cherry']
		console.log(fruits)
		console.log(...fruits)
	```
	
## 7. 불변성
< Immutability.js >

- 데이터 값 과 메모리 값 의 차이 (자바스크립트 참조)	
	
## 8. 얇은 복사와 깊은 복사
< copy.js >

- 얇은 복사
- **lodash** 를 활용한 깊은 복사 
