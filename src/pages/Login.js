import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

let idValue = 0;
let pwValue = 0;

const Login = () => {
  const [val, setVal] = useState(true);

  function loginCheck(e) {
    if (e.target.name === 'id') {
      idValue = e.target.value;
    } else {
      pwValue = e.target.value;
    }
    idValue.includes('@') && pwValue.length >= 8 ? setVal(false) : setVal(true);
  }

  const navigate = useNavigate();
  const loginSuccess = () => {
    navigate('/');
  };

  const signIn = () => {
    fetch(
      `http://ec2-3-38-135-202.ap-northeast-2.compute.amazonaws.com:8000/auth/signin`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: idValue,
          password: pwValue,
        }),
      }
    )
      .then(response => response.json())
      .then(result => {
        if (setVal === false) {
          loginSuccess();
          localStorage.setItem('access_token', result.access_token);
        } else {
          alert('아이디와 비밀번호를 확인해주세요.');
        }
      });
  };

  const signUp = () => {
    navigate('/signup');
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
          <button disabled={val} type="submit" id="button" onClick={signIn}>
            로그인
          </button>
        </div>
        <button type="button" id="signUp" onClick={signUp}>
          회원가입
        </button>
      </article>
    </div>
  );
};

export default Login;
