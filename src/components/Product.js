import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';

export default function Product({ book, addToCartFn, removeFromCartFn }) {
    const bagItems = useSelector(state => state.cart.books);
    const included = bagItems?.find(item => item.title === book.title);
    //console.log('bagItems::: ', bagItems, included);
    return (
        <Card bg='light' style={{ padding: 0 }}>
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
                {included ?
                    <Button variant="danger" onClick={() => removeFromCartFn(book.title)}>Remove from cart</Button>
                    : <Button variant="primary" onClick={() => addToCartFn(book)}>Add to cart</Button>
                }
            </Card.Footer>
        </Card>
    )
}
