import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function UserCard() {
  return (
    <Card className="col-3">
      <div className="p-4">
        <Card.Img className="" style={{ width: "100%", aspectRatio: "1/1" }} variant="top" src="../../../public/vite.svg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </div>
    </Card>
  );
}

export default UserCard;
