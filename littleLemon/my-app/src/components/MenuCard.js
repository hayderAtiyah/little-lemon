import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MenuCard({ cardImg, cardTitle, cardText }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={cardImg} className="menu-img-card" />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>{cardText}</Card.Text>
        <Button
          className="menu-learnMoreButton"
          onClick={() =>
            alert(
              "This is a fictional restaurant. There is no additional information about the food."
            )
          }
        >
          Learn more
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MenuCard;
