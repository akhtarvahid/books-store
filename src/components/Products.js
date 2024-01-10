import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Col from 'react-bootstrap/Col';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook, savedTech } from '../store/cartSlice';
import { getBooks, resetBooks } from '../store/bookProductsSlice';


export default function Products() {
  const alreadySelected = useSelector(state => state.cart.selectedTechnology);
  const bookProducts = useSelector(state => state.bookProducts);
  const [selectTech, setSelectTech] = useState(alreadySelected || 'all');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks(selectTech));
  }, [selectTech, dispatch])



  const addToCartFn = (book) => {
    // dispatch an addBook action
    dispatch(addBook(book));
  }

  const removeFromCartFn = (book) => {
    dispatch(removeBook(book));
  }

  if (bookProducts.loading) {
    return <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Spinner animation="grow" variant="primary" />
    </div>
  }

  return (
    <Col justify-content='center'>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <select onChange={(e) => {
          setSelectTech(e.target.value);
          dispatch(resetBooks());
          dispatch(savedTech(e.target.value));
        }}
          value={selectTech}
          style={{ width: '40%' }}
        >
          <option value='all'>All</option>
          <option value='JavaScript'>Javascript</option>
          <option value='Java'>Java</option>
          <option value='CSS'>CSS</option>
          <option value='mongodb'>Mongodb</option>
          <option value='Zookeeper'>Zookeeper</option>
          <option value='python'>Python</option>
          <option value='ruby'>Ruby</option>
          <option value='php'>PHP</option>
          <option value='nodejs'>Nodejs</option>
        </select>
      </div>
      {bookProducts?.allBooks?.length < 1 && <Spinner animation="grow" variant="primary" />}
      <Row xs={1} md={5} className="g-4" style={{ justifyContent: 'center' }}>
        {bookProducts?.allBooks?.map((book, i) =>
          <Product
            book={book}
            key={book.isbn13 + '-' + i}
            addToCartFn={addToCartFn}
            removeFromCartFn={removeFromCartFn}
          />
        )}
      </Row>
    </Col>
  )
}
