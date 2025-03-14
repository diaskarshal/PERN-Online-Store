import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const Pages = observer(() => {
  const { device } = useContext(Context);
  return (
    <ListGroup>
      <ListGroup.Item>AAAAAAA</ListGroup.Item>
      <ListGroup.Item>AAAAAAA</ListGroup.Item>
      <ListGroup.Item>AAAAAAA</ListGroup.Item>
    </ListGroup>
  );
});

export default Pages;
