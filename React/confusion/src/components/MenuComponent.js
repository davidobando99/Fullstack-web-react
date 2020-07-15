import React from "react";

import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

function RenderMenuItem(props) {
  return (
    <Card onClick={() => props.onClick(props.dish.id)}>
      <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
      <CardImgOverlay>
        <CardTitle>{props.dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} onClick={props.onClick}></RenderMenuItem>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">{menu}</div>
    </div>
  );
};

export default Menu;
