import React, { useEffect, useState } from "react";
import BoardItem from "../../components/BoardItem";
import axios from "axios";

const Home = () => {
  //DB 목록을 저장해서 관리 할 useState
  const [boards, setBoards] = useState([]);

  //서버에서 데이터 조회 - axios 컴포넌트가 마운트 될때
  useEffect(() => {
    axios
      .get("http://localhost:9000/boards", {
        headers: {
          Authorization: localStorage.getItem("Authorization"), //localStorage에서 저장된 토큰을 꺼내서 보낸다
        },
      })

      .then((res) => {
        setBoards(res.data); // state에서 관리되는 변수가 변경되어 update(re-rendering)
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
  }, []); // useEffect에 [] 넣어서 Home이 로딩될때 한번만 불러오도록 설정 안할경우 최초실행 + 상태값변경 때마다 실행됨

  return (
    <div>
      <h3>전체 게시물 입니다</h3>
      {/* <BoardItem /> */}
      {boards.map((board) => (
        <BoardItem key={board.id} board1={board} />
    ))}    {/* boards의 길이만큼 반복해서 동작 */}

    </div>
  );
};

export default Home;
