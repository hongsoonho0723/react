import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/board/Home";
import Detail from "./pages/board/Detail";
import SaveForm from "./pages/board/SaveForm";
import UpdateForm from "./pages/board/UpdateForm";
import JoinForm from "./pages/user/JoinForm";
import LoginForm from "./pages/user/LoginForm";
import Header from "./components/Header";
import { createContext, useEffect, useState } from "react";

/*useContext 를 이용해서 하위 컴포넌트들이 데이터 공유하기*/
export const LogingedContext = createContext();

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleLoggedChange = (isLoggedIn) => {
    setIsLoggedIn(isLoggedIn);
  };

  //컴포넌트가 mount or update 될때 로그인 여부에 따른 상태값 변경
  useEffect(() => {
    console.log("동작");
    localStorage.getItem("id") != null
      ? setIsLoggedIn(true)
      : setIsLoggedIn(false);
    console.log("App useEffect isLoggeedIn = ", isLoggedIn);
  }, []); // 의존성 배열에 isLoggedIn 추가

  /*
  로그인(LoginForm.jsx) or 로그아웃(Header.jsx) 될 때 로그인여부
  상태값을 변경할 이벤트
  handleLoggedChange 와 isLoggedIn 를 사용해야 하는 컴포넌트들이
  여럿이기에createContex 를 이용하여 서로 공유할수 있도록 한다.
*/
 
  return (
    <LogingedContext.Provider
      value={{ isLoggedIn: isLoggedIn, onLoggedChange: handleLoggedChange }}
    >
      <div>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/saveForm" element={<SaveForm />} />
            <Route path="/board/:id" element={<Detail />} />
            <Route path="/updateForm/:id" element={<UpdateForm />} />
            <Route path="/joinForm" element={<JoinForm />} />
            <Route path="/loginForm" element={<LoginForm />} />
          </Routes>
        </Container>
      </div>
    </LogingedContext.Provider>
  );
}

export default App;
