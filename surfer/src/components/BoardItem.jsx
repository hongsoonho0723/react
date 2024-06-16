import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const BoardItem = (props) => {
  const {id , title , content , reDate , member} = props.board1; //props 안에 값을 하나씩 꺼내서 저장
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          제목 : {title} / 작성자 : {props.board1.member.name}
        </Card.Title>
        <Link className='btn btn-primary' to={'/board/'+props.board1.id}>상세보기</Link>
      </Card.Body>
    </Card>
  );
};

export default BoardItem;
