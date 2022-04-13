
import _ from 'lodash';

// 얇은 복사 (Shallow Copy), 깊은 복사 (Deep copy)

const user = {
  name : 'TaeGeom',
  age : 27,
  email : ['TaeGeom@gmail.com']
}

// const copyUser = user                        // 얇은 복사
//const copyUser = Object.assign({}, user)


// const copyUser = {...user}
const copyUser = _.cloneDeep(user)              // 깊은 복사
console.log(copyUser === user)

user.name = 'Y TG'
console.log('user', user)
console.log('copyUser', copyUser)

console.log('---------------------------------------------')

user.email.push('alf6292@naver.com')            // 얇은 복사
console.log(user.email === copyUser.email)
console.log('user',user)
console.log('copyuser', copyUser)