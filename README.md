# 원티드 프리온보딩 프론트엔드 코스

#### 이 레파지토리는 원티드 프리온보딩 프론트엔드 과정 선발 과제 제출용 저장소입니다.

- #### 배포 링크 : [https://bitnaleeeee.github.io/wanted-pre-onboarding-fe-7/](https://bitnaleeeee.github.io/wanted-pre-onboarding-fe-7/)

### STACK

<img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/SASS-cc6699.svg?&style=for-the-badge&logo=Sass&logoColor=White">

---

## 목차

- [프로젝트의 실행](#프로젝트의실행)
- [구현 사항](#구현사항)
- [실행 결과](#실행결과)
- [폴더 구조](#폴더구조)

---

</br>

## 프로젝트의실행

```
$ npm install
$ npm start
```

</br>

## 구현사항

</br>

- [x] 로그인, 회원가입 유효성 검사
- [x] 로그인 API 호출, 올바른 응답을 받았을 때 `todo` 경로로 이동
- [x] 로그인 여부에 따른 리다리렉트 처리 구현
- [x] `todo` 경로 접속시 투두 리스트, 입력창, 추가 버튼, 수정, 삭제 기능 구현
- [x] `todo` 체크 박스 구현

</br>

## 실행결과

</br>

<img src="https://user-images.githubusercontent.com/99943583/195349755-8e6d0b85-a0d5-4f3a-8b77-bc1300316b21.gif">

</br>

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

</br>

## 투두 리스트

투두 리스트 컴포넌트 구조는 아래와 같습니다.
</br>

```
📜 Todo.js
 ├──📜 TodoForm.js
 └──📜 TodoList.js
     └──📜 TodoItem.js
```
