const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOKS = 'bookStore/books/REMOVE_BOOKS';

const baseState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOKS,
  payload,
});

const reducer = (state = baseState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
      case REMOVE_BOOKS:
        return state.filter((book) => book.id !== action.payload);
        default:
          return state;
  }
};

export default reducer;
