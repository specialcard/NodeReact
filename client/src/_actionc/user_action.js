import axios from 'axios';
import {AUTH_USER, LOGIN_USER,REGISTER_USER} from './types';



export function loginUser(dataTosubmit){

  
  const request = axios.post('/api/users/login', dataTosubmit)
  .then(res => res.data )
  .catch(e => alert('로그인에실패하였습니다'))

  return {
    type: LOGIN_USER,
    payload: request,
  }
}

export function registerUser(dataTosubmit){

  
  const request = axios.post('/api/users/register', dataTosubmit)
  .then(res => res.data )
  .catch(e => alert('회원가입에 실패하였습니다'))

  return {
    type: REGISTER_USER,
    payload: request,
  }
}

export function auth(){

  
  const request = axios.get('/api/users/auth')
  .then(res => res.data )

  return {
    type: AUTH_USER,
    payload: request,
  }
}
