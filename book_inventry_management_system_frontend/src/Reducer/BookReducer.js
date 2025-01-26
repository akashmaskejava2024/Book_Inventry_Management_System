
const initialState = {
    books: []
  };
  
  const bookReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'getALlBooks':
        return {
          ...state,
          books: [...action.payload]
        };

        case 'deleteBoook':
            return{

                ...state,
                books:  state.books.filter( book => book.id !== action.payload  )
            };
      default:
        return state;
    }
  };
  
  export default bookReducer;