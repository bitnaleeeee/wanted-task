import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../../config.js';
import './SignIn.scss';
import { FaUser, FaUnlockAlt } from 'react-icons/fa';
import './SignIn.scss';

let idValue = '';
let pwValue = '';

const SignIn = () => {
  const navigate = useNavigate();
  const [val, setVal] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/todo');
    }
  }, [navigate]);

  function loginCheck(e) {
    if (e.target.id === 'id') {
      idValue = e.target.value;
    } else {
      pwValue = e.target.value;
    }
    idValue.includes('@') && pwValue.length >= 8 ? setVal(false) : setVal(true);
  }

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
      <h1 className="logo">로그인</h1>
      <article className="article">
        <div className="inputBox">
          <div className="inputWrap">
            <FaUser className="icon" />
            <input
              onChange={loginCheck}
              type="text"
              id="id"
              placeholder="이메일을 입력해주세요"
            />
          </div>
          <div className="inputWrap">
            <FaUnlockAlt className="icon" />
            <input
              onChange={loginCheck}
              type="password"
              id="pw"
              placeholder="비밀번호"
            />
          </div>
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
