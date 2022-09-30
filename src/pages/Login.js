import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

let idValue = 0;
let pwLength = 0;

const Login = () => {
  const [val, setVal] = useState(true);

  function loginCheck(e) {
    if (e.target.name === 'id') {
      idValue = e.target.value;
    } else {
      pwLength = e.target.value.length;
    }
    idValue.includes('@') && pwLength >= 8 ? setVal(false) : setVal(true);
  }
  const navigate = useNavigate();
  const loginSucess = () => {
    navigate('/todo');
  };

  return (
    <div className="login">
      <article className="article">
        <div className="logo">LOGIN</div>
        <div className="inputBox">
          <input
            name="id"
            onChange={loginCheck}
            type="text"
            id="id"
            placeholder="이메일을 입력해주세요"
          />
          <input
            name="pw"
            onChange={loginCheck}
            type="password"
            id="pw"
            placeholder="비밀번호"
          />
          <button
            disabled={val}
            type="button"
            id="button"
            onClick={loginSucess}
          >
            로그인
          </button>
        </div>
        <div className="forget">
          <a href="https://bitnaleeeee.github.io/">회원가입</a>
        </div>
      </article>
    </div>
  );
};

export default Login;
