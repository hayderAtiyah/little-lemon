import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MenuCard(cardImg, cardTitle, cardText) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={cardImg} />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>{cardText}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default MenuCard;
