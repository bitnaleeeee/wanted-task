# 원티드 프리온보딩 프론트엔드 코스

### 이 레파지토리는 원티드 프리온보딩 프론트엔드 과정 선발 과제 제출용 저장소입니다.

- ### 배포 링크 : [https://recordboy-scrap-sample.herokuapp.com](https://recordboy-scrap-sample.herokuapp.com/)
- ### 소스 : [resipotory 바로가기](https://github.com/bitnaleeeee/wanted-pre-onboarding-fe-7)

### STACK

<img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/SASS-cc6699.svg?&style=for-the-badge&logo=Sass&logoColor=White">

---

## 목차

- [프로젝트의 실행](#프로젝트의실행)
- [실행 결과](#실행결과)
- [폴더 구조](#폴더구조)
- [구현 사항](#구현사항)

---

</br>

## 프로젝트의실행

```
$ npm install
$ npm start
```

## 실행결과

<영상 짤로 넣기>

## 폴더구조

```
📦 src
├── 📂 pages
│   ├──📂 Auth
│   │    ├── 📂 SignIn
│   │    │    ├── 📜 SignIn.js
│   │    │    └── 📜 SignIn.scss
│   │    └── 📂 SignUp
│   │         ├── 📜 SignUp.js
│   │         └── 📜 SignUp.scss
│   │
│   └── 📂 Todo
│        ├──📜 Todo.js
│        ├──📜 Todo.scss
│        ├──📜 TodoForm.js
│        ├──📜 TodoForm.scss
│        ├──📜 TodoItem.js
│        ├──📜 TodoItem.scss
│        └──📜 TodoList.js
│
├── 📜 config.js
├── 📜 index.js
└── 📜 Router.js
```

## 구현사항

</br>

- ### 토큰이 있을 경우 todo 페이지로 이동

```javascript
//SignIn.js
const navigate = useNavigate();

useEffect(() => {
  if (localStorage.getItem('token')) {
    navigate('/todo');
  }
}, [navigate]);
```

로컬 스토리지에 토큰이 있는 상태로 `/` 에 접속할 경우 `todo`페이지로 연결됩니다.
</br>

- ### 아이디, 비밀번호 로그인 조건 검사

```javascript
//SignIn.js

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
};
```

전역 변수에 `idValue` 와 `pwValue`를 빈값으로 선언한 후 아아디와 비밀번호 창에 입력이 될 때 `onClick`이벤트를 주고 해당 입력값을 각 변수에 담았습니다. 삼항 연산자로 각 아이디 비밀번호의 입력 값이 조건에 충족할 경우 `useState`에 `true` `false` 값에 따라 버튼을 활성,비활성화 시킵니다. 조건에 충족할때만 버튼이 활성화 되도록 하였습니다.
</br>
</br>

- ### 아이디, 비밀번호 로그인 유효성 검사 및 토큰 발급

```javascript
//SignIn.js

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

```

[JSX]

```javascript
<button disabled={val} type="submit" id="button" onClick={login}>
  로그인
</button>
```

`useState`에 값이 `false`가 담길때만 로그인 활성화 되도록 작성하였고, 활성화 된 버튼에 `onClick`이벤트가 발생할 경우 `login`함수가 실행되도록 하였습니다. 로그인 조건이 충족되었을때 `fetch`로 각 아이디, 비밀번호 입력 값을 담아 토큰 발행 요청을 보냅니다. 서버에서 토큰을 발급해준 경우 발급 받은 토큰 로컬 스토리지에 저장하고, `todo`페이지로 이동합니다. 만약 토큰이 발급되지 않은 경우 `alert` 창 으로 다시 합니다.
</br>
</br>

- ### 아이디, 비밀번호 로그인 유효성 검사 및 토큰 발급

```javascript
//SignUp.js

  let idValue = '';
  let nameValue = '';
  let pwValue = '';

  const SignUp = () => {
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

    function signUpCheck() {
    if (idValue.includes('@') && pwValue.length >= 8 && nameValue.length >= 1) {
      setVal(false);
    } else {
      setVal(true);
    }
  }

```

전역 변수에 회원가입 창에 아이디,성명,비밀번호 값을 담을 변수를 빈 값으로 선언했습니다.
각 입력창에 `onChange`이벤트가 실행될때 `userInfo`함수가 실행되도록 작성하였습니다. 해당 함수는 각 입력창의 값을 이벤트가 발생할때 해당되는 변수에 담은 후 `signUpCheck`함수를 실행합니다. 이 함수는 아이디와 비밀번호를 충족하는지 검사한 후 `useState`를 이용하여 값의 변화를 변수에 담도록 하였습니다.
</br>

[JSX]

```javascript
  <button disabled={val} type="submit" id="signUp"
  onClick={validSignUp} >
```

val에 변동되는 값에 따라 `useState`값이 `true`일 경우 버튼이 비활성화되고, 입력 조건이 충족하여 `false`일 경우 버튼이 활성화 되도록 하였습니다.
</br>
</br>

- ### 아이디 / 비밀번호 로그인 유효성 검사 및 토큰 발급

```javascript
//SignUp.js

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
```

회원 가입 입력 조건이 미충족 되는 경우 서버에서 보낸 에러 메시지를 `alert`창에 출력하도록 작성했습니다. 만약 토큰이 발급되었을 경우, 로컬스토리지에 저장한 후 로그인창으로 이동합니다.
