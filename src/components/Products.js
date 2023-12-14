import React, { useEffect, useState } from 'react'
import { SEARCH_ENDPOINT } from '../utils/util'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

export default function Products() {
  const [products, setProducts] = useState({
    allBooks: []
  });

  useEffect(() => {
    const getAllBooks = async () => {
      const noOfApiCalls = [1, 2, 3, 4];
      await Promise.all(
        noOfApiCalls.map(async (id) => {
          const res = await fetch(`${SEARCH_ENDPOINT}/mongodb?page=${id}`)
          const response = await res.json();
          setProducts(products => ({
            response,
            allBooks: [...products.allBooks, ...response?.books]
          }));
        })
      )
    }
    getAllBooks();
  }, [])

  return (
    <Row xs={1} md={5} className="g-4">
      {products?.allBooks?.map((book, i) =>
        <div key={book.isbn13 + '-' + i}>
          <Card style={{ width: '18rem' }} bg='light'>
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
      )}
    </Row>
  )
}
