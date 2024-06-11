import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SaveForm = () => {
  //input 에 값이 변경될 때
  const changeValue = (e) => {
    setBoard({
      ...board,
      [e.target.name]: e.target.value, // e.target.name은 form태그안에 name을 뜻
    });
  };
  //페이지 이동하는 방법
  const navigator = useNavigate();
  //등록하기 클릭
  const submitBoard = (e) => {
    e.preventDefault();

    axios({
      method: "POST",
      url: "http://localhost:9000/boards/board", 
      headers: {
        Authorization: localStorage.getItem("Authorization"), //localStorage에서 저장된 토큰을 꺼내서 보낸다
      },
      data: board,
    })
      .then((res) => {
        console.log(res);
        navigator("/");
      })
      .catch((err) => {
        let errMessage = err.response.data.type + "\n";
        errMessage += err.response.data.title + "\n";
        errMessage += err.response.data.detail + "\n";
        errMessage += err.response.data.status + "\n";
        errMessage += err.response.data.instance + "\n";
        errMessage += err.response.data.timestamp;
        alert(errMessage);
      });
  };

  //게시물 상태관리
  const [board, setBoard] = useState({
    title: "",
    content: "",
    memberNo: localStorage.getItem("memberNo"),
  }); //제목 ,작성자=memberNo , 내용

  return (
    <div>
      <h1>게시물 등록 </h1>
      <Form onSubmit={submitBoard}>
        <Form.Label htmlFor="title">title</Form.Label>
        <Form.Control
          type="text"
          id="title"
          name="title"
          onChange={changeValue}
        />
        <Form.Label htmlFor="author">writer</Form.Label>
        <Form.Control
          type="text"
          id="name"
          name="name"
          readOnly
          value={localStorage.getItem("name")}
        />
        <Form.Label>content</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="content"
          id="content"
          onChange={changeValue}
        />
        <p />
        <Button variant="primary" type="submit">
          전송
        </Button>
        <p />
      </Form>
    </div>
  );
};
export default SaveForm;
