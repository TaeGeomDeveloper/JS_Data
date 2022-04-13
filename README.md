# 자바 스크립트 데이터

자바스크립트 데이터 공부


## 1. 문자
	- 검색 ,비교
	```javascript
		const result = 'Hello world!'.indexOf('world')
	``` 
	- 길이 
	```javascript
		console.log(str.length)
	``` 
	- 자르기 , 대채하기
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
	- 소수점 **toFixed**
	- 정수형 **parseInt**, 소수형 **parseFloat**
	- 절대값 **Math.abs**
	- 최소값 **Math.min**
	- 최대값 **Math.max**
	- 소수올림 **Math.ceil**
	- 소수내림 **Math.floor**
	- 소수 반올리 **Math.round**
	- 랜덤	**Math.round**
	
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
