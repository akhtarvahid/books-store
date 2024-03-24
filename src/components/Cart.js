import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { removeBook } from "../store/cartSlice";

export default function Cart() {
  const bagBooks = useSelector((state) => state.cart.books);
  const dispatch = useDispatch();

  const rowStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  };

  return (
    <div>
      <Card.Header
        as="h3"
        style={{ fontSize: 30, margin: 40, textAlign: "center" }}
      >
        {" "}
        Selected Items: {bagBooks.length}
      </Card.Header>
      <Row xs={12} md={12} className="g-4">
        {bagBooks.map((book) => (
          <Card bg="light" style={rowStyle}>
            <Card style={{ width: "20%" }}>
              <Card.Img
                variant="top"
                src={book.image}
                style={{ width: 420, height: 500, marginLeft: -32 }}
              />
              <Card.Body className="text-center" style={{ marginTop: -60 }}>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.subTitle}</Card.Text>
                <Card.Text>{book.price}</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ textAlign: "center" }}>
              <Card.Text>1</Card.Text>
              <Card.Footer className="text-center">
                <Button
                  variant="primary"
                  onClick={() => dispatch(removeBook(book.title))}
                >
                  Remove
                </Button>
              </Card.Footer>
            </Card>
          </Card>
        ))}
      </Row>
    </div>
  );
}
