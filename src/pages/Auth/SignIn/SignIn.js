import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../../config.js';
import './SignIn.scss';

let idValue = '';
let pwValue = '';

const SignIn = () => {
  const [val, setVal] = useState(true);

  function loginCheck(e) {
    if (e.target.id === 'id') {
      idValue = e.target.value;
    } else {
      pwValue = e.target.value;
    }
    idValue.includes('@') && pwValue.length >= 8 ? setVal(false) : setVal(true);
  }

  const navigate = useNavigate();

  const signUp = () => {
    navigate('/signup');
  };

  const login = () => {
    fetch(API.LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: idValue,
        password: pwValue,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.access_token) {
          localStorage.setItem('token', data.access_token);
          navigate('/todo');
        } else {
          alert('아이디 또는 비밀번호를 확인해주세요.');
        }
      });
  };
  return (
    <div className="login">
      <article className="article">
        <div className="logo">login</div>
        <div className="inputBox">
          <input
            onChange={loginCheck}
            type="text"
            id="id"
            placeholder="이메일을 입력해주세요"
          />
          <input
            onChange={loginCheck}
            type="password"
            id="pw"
            placeholder="비밀번호"
          />
          <button disabled={val} type="submit" id="button" onClick={login}>
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

export default SignIn;
