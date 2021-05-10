import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Nav.scss';

function NavBar(){
  return(
    <div className="nav">
      <ul>
        <li><Link to="/">홈</Link></li>
        <li><Link to="/login">로그인</Link></li>
        <li><Link to="/register">회원가입</Link></li>
      </ul>
    </div>
  );
}

export default NavBar;