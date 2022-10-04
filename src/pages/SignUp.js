import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.scss';

const SignUp = () => {
  const navigate = useNavigate();
  const signIn = () => {
    navigate('/');
  };
  return (
    <div className="signUp">
      <article className="article">
        <div className="logo">Sing Up</div>
        <div className="inputBox">
          <input
            name="id"
            type="text"
            id="id"
            placeholder="이메일 주소"
            // value={inputValue.firstName}
            // onChange={saveInput}
          />
          <input
            name="name"
            type="text"
            id="name"
            placeholder="성명"
            // value={inputValue.lastName}
            // onChange={saveInput}
          />
          <input
            name="pw"
            type="password"
            id="pw"
            placeholder="비밀번호"
            // value={inputValue.lastName}
            // onChange={saveInput}
          />
        </div>
        <p>비밀번호는 8자리 이상으로 설정해주세요.</p>
        <button type="submit" id="signUp" onClick={signIn}>
          가입
        </button>
      </article>
    </div>
  );
};

export default SignUp;
