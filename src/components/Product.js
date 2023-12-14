import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Product({ book }) {
    return (
        <div>
            <Card bg='light'>
                <Card.Img variant="top" src={book.image} />
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
                    <Button variant="primary">Add to cart</Button>
                </Card.Footer>
            </Card>
        </div>
    )
}
