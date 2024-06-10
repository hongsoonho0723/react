import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LogingedContext } from "../../App";

const LoginForm = () => {

    let logingedCon =useContext(LogingedContext);

  // 인증에 필요한 username, password 상태관리를 위한 useState
  const [member, setMember] = useState({
    username: "",
    password: "",
  });

  // input 에 값이 입력될 때 상태 값 수정
  const changeValue = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  }; //

  const navigator = useNavigate();

  //로그인 버튼을 클릭했을 때 axios
  const submitLogin = (e) => {
    e.preventDefault(); //submit 이벤트 막음
    let formData = new FormData(); //폼전송으로 보내기위한 작업
    formData.append("username", member.username);
    formData.append("password", member.password);
    axios({
      method: "POST",
      url: "http://localhost:9000/login",
      data: formData,
    })
      .then((res) => {
        console.log("res = ", res);

        //로그인 성공시
        localStorage.setItem("memberNo", res.data.memberNo);
        localStorage.setItem("id", res.data.id);
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("address", res.data.address);
        localStorage.setItem("Authorization", res.headers.authorization);

        //App.js에 있는 isLoggedIn 변수를 true 변경한다.
        logingedCon.onLoggedChange(true); // App.js에서 전달해준 onLoggedChange(ture)값



        navigator("/");

      })
      .catch((err) => {
        alert("정보를 다시 확인해주세요.");
        setMember({
          username: "",
          password: "",
        });
      });
  };
  return (
    <div>
      <h3 style={{ padding: "10px" }}>로그인하기 </h3>
      <Form onSubmit={submitLogin}>
        <Form.Label htmlFor="username">아이디</Form.Label>
        <Form.Control
          type="text"
          id="username"
          name="username"
          onChange={changeValue}
          value={member.username} //아이디 패스워드 오류시 값을 지워줌
        />
        <Form.Label htmlFor="password">비밀번호</Form.Label>
        <Form.Control
          type="password"
          id="password"
          name="password"
          onChange={changeValue}
          value={member.password} //아이디 패스워드 오류시 값을 지워줌
        />
        <p />
        <Button variant="primary" type="submit">
          로그인
        </Button>
        <p />
      </Form>
    </div>
  );
};
export default LoginForm;
