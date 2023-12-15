import React, { useEffect, useState } from 'react'
import { SEARCH_ENDPOINT } from '../utils/util'
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Col from 'react-bootstrap/Col';
import Product from './Product';
import { useDispatch } from 'react-redux';
import { addBook } from '../store/cartSlice';


export default function Products() {
  const [selectTech, setSelectTech] = useState('all');
  const dispatch = useDispatch();
  const [products, setProducts] = useState({
    allBooks: []
  });

  useEffect(() => {
    const getAllBooks = async () => {
      const noOfApiCalls = [1, 2, 3, 4];
      await Promise.all(
        noOfApiCalls.map(async (id) => {
          const res = await fetch(`${SEARCH_ENDPOINT}/${selectTech}?page=${id}`)
          const response = await res.json();
          setProducts(products => ({
            response,
            allBooks: [...products.allBooks, ...response?.books]
          }));
        })
      )
    }
    getAllBooks();
  }, [selectTech])

  const addToCartFn = (book) => {
    // dispatch an addBook action
    dispatch(addBook(book))
    console.log(book);
  }

  return (
    <Col justify-content='center'>
      <div>
        <select onChange={(e) => {
          setSelectTech(e.target.value);
          setProducts({
            ...products,
            allBooks: []
          });

        }}>
          <option value='all'>All</option>
          <option value='JavaScript'>Javascript</option>
          <option value='Java'>Java</option>
          <option value='CSS'>CSS</option>
          <option value='mongodb'>Mongodb</option>
          <option value='Zookeeper'>Zookeeper</option>
        </select>
        {/* <input type='text' placeholder='Enter technology name to search' onChange={(e) => setSelectTech(e.target.name)}/> */}
      </div>
      {products?.allBooks?.length < 1 && <Spinner animation="grow" variant="primary" />}
      <Row xs={1} md={5} className="g-4">
        {products?.allBooks?.map((book, i) =>
          <Product
            book={book}
            key={book.isbn13 + '-' + i}
            addToCartFn={addToCartFn}
          />
        )}
      </Row>
    </Col>
  )
}
