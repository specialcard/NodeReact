import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {auth} from '../_actionc/user_action';
import axios from 'axios';



export default function(SepcificComponent, option, adminRouter = null){
  //option
  // null => 아무나 출입가능
  // trun => 로그인한 유저만 출입가능
  // false => 로그인한 유저는 불가능한 페이지

  function AuthenticationChenk(props){
    const Dispatch = useDispatch();
    useEffect(() => {
      Dispatch(auth()).then(res=>{
        //로그인 하지않을때
        if(!res.payload.isAuth){
          if(option){
            props.history.push('/login')
          }
        }else{
          //로그인에 성공하였을때
          if(adminRouter && !res.payload.isAdmin){
            props.history.push('/');
          }else{
            if(option === false){
              props.history.push('/');
            }
          }
        }
      });
    }, [])
    return(
      <SepcificComponent />
    )
  }
  
  return AuthenticationChenk
}