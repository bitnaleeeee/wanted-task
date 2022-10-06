import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../../config.js';
import './SignUp.scss';

let idValue = 0;
let nameValue = 0;
let pwValue = 0;

const SignUp = () => {
  const [val, setVal] = useState(true);

  fetch(API.SINGUP, {
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
        alert('로그인이 완료되었습니다.');
        navigate('/todo');
      } else {
        alert('아이디와 비밀번호를 확인해주세요.');
      }
    });

  function userInfo(e) {
    if (e.target.id === 'id') {
      idValue = e.target.value;
    } else if (e.target.id === 'name') {
      nameValue = e.target.value;
    } else {
      pwValue = e.target.value;
    }
    signUpCheck();
  }

  function signUpCheck() {
    if (idValue.includes('@') && pwValue.length >= 8 && nameValue.length >= 1) {
      setVal(false);
    } else {
      setVal(true);
    }
  }
  const navigate = useNavigate();
  const signIn = () => {
    alert('회원가입을 환영합니다!');
    navigate('/');
  };

  return (
    <div className="signUp">
      <article className="article">
        <div className="logo">Sign Up</div>
        <div className="inputBox">
          <input
            onChange={userInfo}
            type="text"
            id="id"
            placeholder="이메일 주소"
          />
          <input onChange={userInfo} type="text" id="name" placeholder="성명" />
          <input
            onChange={userInfo}
            type="password"
            id="pw"
            placeholder="비밀번호"
          />
          <p>비밀번호는 8자리 이상으로 설정해주세요.</p>
          <button disabled={val} type="submit" id="signUp" onClick={signIn}>
            가입
          </button>
        </div>
      </article>
    </div>
  );
};

export default SignUp;
