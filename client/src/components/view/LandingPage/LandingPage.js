import React, {useEffect} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'
function LandingPage(props){



  useEffect(()=>{
    axios.get('/api/hello')
    .then( res => console.log(res.data))
    .catch(e => console.log(`error ${e}`));
  },[])

  const onClick = (e) => {
    e.preventDefault();
    axios.get('/api/users/logout')
    .then(res => {
      if(res.data.success){
        props.history.push("/register")
      }else{
        console.log('로그아웃실패')
      }
    })
  }
  const signup = e => {
    e.preventDefault();

    props.history.push('/login');
  }

  return(
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'}}>
      <h2>
        시작페이지
      </h2>
      <button onClick={signup} >회원가입</button>
      <button onClick={onClick} style={{position: 'absolute', top: '100px', right: '100px'}}>로그아웃</button>
    </div>
  );
}

export default withRouter(LandingPage);