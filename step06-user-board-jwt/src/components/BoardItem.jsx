import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BoardItem = (props) => {
  return (

    <Card>
      <Card.Body>
        <Card.Title>
            제목 : {props.board.title} / 
            작성자 : {props.board.member.name}
            </Card.Title>

        <Button variant="primary">상세보기</Button>
      </Card.Body>
      
    </Card>
  );
}

export default BoardItem;