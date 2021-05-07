import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {registerUser} from '../../../_actionc/user_action'
import { withRouter } from 'react-router-dom'
function RegisterPage(props) {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: '',
    name: '',
    password: '',
    ConfirmPassword: '',
  })
  const { email, name, password, ConfirmPassword } = state;

  const onChange = text => e => {
    setState({
      ...state,
      [text]: e.target.value,
    });
  }

  const onSubmit = e => {
    e.preventDefault();
    if(password !== ConfirmPassword){
      return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
    }
    let body = {
      email: email,
      password: password,
      name: name,
    }
    dispatch(registerUser(body))
    .then(res => {
      if (res.payload.success){
        props.history.push('/login')
      }else{
        alert('실패')
      }
    })
  }


  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'}}>
      
      <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column'}}>
        <label>이메일</label>
        <input type="email" value={email} onChange={onChange('email')} />
        <label>이름</label>
        <input type="text" value={name} onChange={onChange('name')} />
        <label>비밀번호</label>
        <input type="password" value={password} onChange={onChange('password')} />
        <label>비밀번호확인</label>
        <input type="password" value={ConfirmPassword} onChange={onChange('ConfirmPassword')} />

        <br />

        <button>회원가입</button>

      </form>

    </div>
  )
}

export default withRouter(RegisterPage);
