import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../../config.js';
import './SignUp.scss';
import { FaUser, FaUnlockAlt, FaKey } from 'react-icons/fa';

let idValue = '';
let nameValue = '';
let pwValue = '';

const SignUp = () => {
  const navigate = useNavigate();
  const [val, setVal] = useState(true);

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

  const validSignUp = () => {
    fetch(API.SIGNUP, {
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
        if (data.error) {
          return alert(data.message);
        }
        localStorage.setItem('token', data.access_token);
        alert('환영합니다!');
        navigate('/');
      });
  };

  return (
    <div className="signUp">
      <h1 className="logo">회원가입</h1>
      <article className="article">
        <div className="inputBox">
          <div className="inputWrap">
            <FaUser className="icon" />
            <input
              onChange={userInfo}
              type="text"
              id="id"
              placeholder="이메일 주소"
            />
          </div>
          <div className="inputWrap">
            <FaUnlockAlt className="icon" />
            <input
              onChange={userInfo}
              type="text"
              id="name"
              placeholder="성명"
            />
          </div>
          <div className="inputWrap">
            <FaKey className="icon" />
            <input
              onChange={userInfo}
              type="password"
              id="pw"
              placeholder="비밀번호"
            />
          </div>

          <p>비밀번호는 8자리 이상으로 설정해주세요.</p>
          <button
            disabled={val}
            type="submit"
            id="signUp"
            onClick={validSignUp}
          >
            가입
          </button>
        </div>
      </article>
    </div>
  );
};
export default SignUp;
