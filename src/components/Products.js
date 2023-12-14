import React, { useEffect, useState } from 'react'
import { SEARCH_ENDPOINT } from '../utils/util'
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Col from 'react-bootstrap/Col';
import Product from './Product';


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
    <Col justify-content='center'>
      {products?.allBooks.length < 1 && <Spinner animation="grow" variant="primary" />}
      <Row xs={1} md={5} className="g-4">
        {products?.allBooks?.map((book, i) =>
          <Product book={book} key={book.isbn13 + '-' + i} />
        )}
      </Row>
    </Col>
  )
}
