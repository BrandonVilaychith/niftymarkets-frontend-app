import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const ItemCard = ({ item }) => (
  <div style={{ width: "300px", marginTop: "30px" }}>
    <Card>
      <CardImg top width="100%" src={item.imgUrl} alt="Card image cap" />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        <CardSubtitle>{item.gameName}</CardSubtitle>
        <CardSubtitle>{item.cost}</CardSubtitle>
        <CardText>{item.description}</CardText>
        {/* <Button>Button</Button> */}
      </CardBody>
    </Card>
  </div>
);

export default ItemCard;
