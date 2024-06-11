import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateForm = () => {
  const { id } = useParams(); //

  const [board, setBoard] = useState({
    title: "",
    content: "",
    member: {},
  });

  //페이지 이동하는 방법
  const navigator = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:9000/boards/" + id, {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
      })
      .then((res) => {
        setBoard(res.data);
      })
      .catch((err) => {
        errFun(err);
      });
  }, []);

  const errFun = (err) => {
    if (err.response.status === 403) {
      alert("로그인하고 이용해주세요.");
    } else {
      let errMessage = "오류 = " + err.response.data.type + "\n";
      errMessage += err.response.data.title + "\n";
      errMessage += err.response.data.status + "\n";
      errMessage += err.response.data.instance + "\n";
      errMessage += err.response.data.timestamp;
      alert(errMessage);
    }
    navigator("/");
  };

  const changeValue = (e) => {
    setBoard({
      ...board,
      [e.target.name]: e.target.value,
    });
  };

  const submitBoard = (e) => {
    e.preventDefault(); //sumbit이 동작하면 페이지가 새로고침되기때문에 새로고침을 막기위해서 사용
    axios({
      method: "PUT",
      url: "http://localhost:9000/boards/" + id,
      data: board,
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    })
      .then((res) => {
        navigator("/board/" + id);
      })
      .catch((err) => {
        errFun(err);
      });
  };

  return (
    <div>
      <h2>수정하기</h2>
      <Form onSubmit={submitBoard}>
        <Form.Label htmlFor="title">title</Form.Label>
        <Form.Control
          type="text"
          id="title"
          name="title"
          onChange={changeValue}
          value={board.title}
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
          value={board.content}
        />
        <p />
        <Form.Control
          type="hidden" // memberNo를 넘기기위해서 
          id="memberNo"
          name="memberNo"
          value={localStorage.getItem("memberNo")}
        />
        <Button variant="primary" type="submit">
          Update
        </Button>
        <p />
      </Form>
      <p />
    </div>
  );
};

export default UpdateForm;
