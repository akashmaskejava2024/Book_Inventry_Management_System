import { act } from "react";

const initialState = {
    books: [],
    category: []
};

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addNewBook':
            return {

                ...state,
                books:[...state.books, action.payload]
            };

        case 'updateBook':
            return {
                ...state,
                books: [...state.books, state.books.filter(
                    book => (
                        (book.id == action.payload.id) ? { ...book, ...action.payload } : book
                    )
                )]

            };


        case 'getALlBooks':
            return {
                ...state,
                books: [...action.payload]
            };
        case 'getAllCategories':
            return {
                ...state,
                category: [...action.payload]
            };
        case 'deleteBoook':
            return {

                ...state,
                books: state.books.filter(book => book.id !== action.payload)
            };
        default:
            return state;
    }
};

export default bookReducer;