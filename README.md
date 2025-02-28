# 😀 Face Detection

🔗 **[Live Demo](https://facedetection-three.vercel.app/)**

**Face Detection** is a **full-stack web application** that detects faces in uploaded images using the Clarifai API.

**Face Detection**는 Clarifai API를 활용해 사용자가 업로드한 이미지에서 얼굴을 감지하는 **풀스택 웹 애플리케이션**입니다.

**Face Detection**は、Clarifai APIを活用して、ユーザーがアップロードした画像の中から顔を検出する**フルスタックWebアプリケーションです**。

---

## 🛠 Tech Stack (기술 스택 / 技術スタック)

### **Frontend:**  
- **React.js** - Component-based UI
- **Bootstrap** - Responsive design
- **Particles.js** - Background animation

### **Backend:**  
- **Node.js & Express** - Server-side logic  
- **PostgreSQL** - Database for storing user & image data  
- **Knex.js** - SQL query builder  
- **bcrypt-nodejs** - Password hashing  

### **API & Deployment:**  
- **Clarifai API** - Face detection  
- **Vercel** - Frontend deployment  
- **Render** - Backend deployment  

---

## 📌 Key Features (주요 기능 / 主な機能)

✅ **User Authentication**: Register & Sign in 🔑  
✅ **Face Detection**: Detect faces using Clarifai API 🤖  
✅ **History Tracking**: Stores user image analysis count 📊  


✅ **사용자 인증**: 회원가입 및 로그인 🔑  
✅ **얼굴 감지**: Clarifai API를 활용한 얼굴 탐지 🤖  
✅ **분석 이력 추적**: 사용자의 분석 횟수 저장 📊  

✅ **ユーザー認証**: ユーザー登録とログイン 🔑  
✅ **顔検出**: Clarifai APIを使用した顔認識 🤖  
✅ **履歴追跡**: 画像分析回数を記録 📊  
 

---
## 📚 What I Learned (배운 점 / 学んだこと)

- 🎨 **부트스트랩 스타일링**  
  - 기존보다 좀 더 부트스트랩을 활용하여 UI개선을 했다.

- 🔗 **프론트엔드와 백엔드 연결**  
  - React에서 Fetch API를 사용하여 백엔드와 데이터를 주고받는 흐름을 알게됐다. (엔드포인트)
  - Express.js와 PostgreSQL을 연결하고, Knex.js를 활용하여 데이터베이스와의 연동을 해보았다.

- 🛡️ **Authentication & Security**  
  - `bcrypt-nodejs`를 활용하여 **비밀번호를 안전하게 해싱 및 저장**하는 방법을 배웠다. (bcrypt를 써야하긴 한다)
  - 환경 변수를 활용하여 중요한 데이터를 숨기는 방법을 배웠다. (PAT키, PORT번호 등 중요한 데이터들)

- 🚀 **Vercel & Render 배포**  
  - **프론트엔드는 Vercel**, **백엔드는 Render**에 배포하여 배포된 서비스를 연결하였다.

- 🔧 **Git & GitHub Workflow**  
  - `.gitignore`을 설정하여 **불필요한 파일 업로드 방지**하는 걸 좀 해보았다. (생성 gitignore.io) 
  - **하위 폴더에 `git init`을 잘못 실행하여 생겼던 서브모듈 이슈를 해결했다..

- 🖥️ **CORS 처리 & 프록시 서버 활용**  
  - 다른 출처의 API를 호출할 때 발생하는 **CORS**를 다뤄보았다. Clarifai API를 프론트에서 요청하면 CORS에러가 나와서 서버에 직접 프록시서버를 만들고 API한테 데이터를 받아온 후 프론트에 전달하는 걸 구현해야 했다.
  - **백엔드에서도 CORS문제로 cors 라이브러리를 설치해야 했다.

- 📝 **코드 리팩토링 & 가독성 개선**  
  - `fetch()`, `then()` → **async/await 문법**으로 변경하니 가독성이 훨씬 더 좋고 에러처리가 쉬워짐을 알게 됬다. (Try-catch)
  - 코드에서 **자잘한 공백, 오타**가 앞길을 계속 막았다. 더욱 신경써서 작성할 것.
  - `setState(prev => {...})`를 활용하여 이전 상태(prevState)를 안전하게 유지하는 방법 학습.

- 🛠 **React에서 이벤트 처리 방식**  
  - `<form onSubmit={handleSubmit}>`을 활용하여 **Enter 키로도 제출 가능**하게. 
  - `<button type="submit">`을 설정하여 명확한 폼 제출 이벤트 처리.
  - `onClick={onRouteChange}`는 즉시 실행됨 → `onClick={() => onRouteChange()}`처럼 콜백 형태로 전달해야 함.  

- 🔄 **배포 후 변경 사항 반영 방법**  
  - **Vercel에 배포된 후 백엔드 URL 변경** → 프론트엔드에서 `fetch("http://localhost:3000")`을 **Render에서 받은 배포된 URL로 변경**
  - Vercel에도 백엔드 배포가 되는 줄 알았으나.. 프론트만 가능한 걸 알고 부랴부랴 Render을 찾아서 해봄. 검색해도 잘 안나왔지만 해결하니 너무 짜릿했음.

---

---

## 🛡 License (라이선스 / ライセンス)

MIT License © [bohemio1234](https://github.com/bohemio1234)
