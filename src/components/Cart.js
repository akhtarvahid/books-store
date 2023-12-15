import React from 'react'
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

export default function Cart() {
  const bagBooks = useSelector(state => state.cart);

  const rowStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }

  return (
    <div>
      <h2>Cart</h2>
      <Row xs={12} md={12} className="g-4">
        {bagBooks.map(book =>
          <Card bg='light' style={rowStyle}>
            <Card style={{ width: '30%' }}>
              <Card.Img variant="top" src={book.image} style={{ width: 420, height: 500, marginBlock: -70, marginLeft: 60 }} />
              <Card.Body className="text-center">
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                  {book.subTitle}
                </Card.Text>
                <Card.Text>
                  {book.price}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <Button variant="primary">Remove</Button>
              </Card.Footer>
            </Card>
            <div>0</div>
          </Card>
        )}
      </Row>
    </div>
  )
}
