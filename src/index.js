import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import BookDisplay from './components/BookDisplay';
import Nav from './components/NavBar';
import BookCategories from './components/BookCategory';
import store from './redux/configureStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="bookstore" element={<BookDisplay />} />
          <Route path="categories" element={<BookCategories />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
