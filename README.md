# 자바 스크립트 데이터

자바스크립트 데이터 공부


## 1. 문자
./JS_data/Text.js
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
./JS_data/Number.js
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
	- 길이 **length**
	- 합치기 **concat**
	- 갯수만큼 반복 **forEach**
	- 반복후 새로운 매소드로 반환 **map**
	- 트루 값만 반환	**filter**
 	- 몇번째 인지 검색 **find**, **findIndex**
	- 데이터 확인 **includes**
	- 데이터 삽입 **push**, **unshift()**
	- 배열 반대로 수정 **reverse**
	- 자르기 **splice**
