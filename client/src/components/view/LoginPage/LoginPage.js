import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import {loginUser} from '../../../_actionc/user_action';
import { withRouter } from 'react-router-dom';
function LoginPage(props){
  const dispatch = useDispatch();


  const [state,setState] = useState({
    email: '',
    password: '',
  })

  const {email , password} = state;

  const onChange = text => e => {
    setState({
      ...state,
      [text]: e.target.value
    })
  }
  const onSubmit = e => {
    e.preventDefault();
    let body = {
      email: email,
      password: password
    }
    dispatch(loginUser(body))
    .then(res => {
      if(res.payload.loginSuccess){
          props.history.push('/');
      }else{
        alert('로그인에실패하였습니다');
      }
    }).catch(e=>console.log(e));
  }
  // const[Email,setEmail] = useState("");
  // const[Password, setPassword] = useState("");

  // const onChangeEamil = (e) => {
  //   setEmail(e.currentTarget.value);
  // }
  // const onChangePassword = (e) => {
  //   setPassword(e.currentTarget.value);
  // }
  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   let body = {
  //     email: Email,
  //     passwrod: Password,
  //   }

  //   dispatch(loginUser(body));

  // }

  return(
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'}}>
      
      <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column'}}>
        <label>이메일</label>
        <input type="email" value={email} onChange={onChange('email')} />
        <label>비밀번호</label>
        <input type="password" value={password} onChange={(onChange('password'))}/>

        <br />
        <button>
          로그인
        </button>
      </form>

    </div>
  );
}

export default withRouter(LoginPage);