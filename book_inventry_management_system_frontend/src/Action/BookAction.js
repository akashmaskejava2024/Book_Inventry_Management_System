



export const addNewBookAction = (book) =>(

    {
        type:'addNewBook',
        payload:book

    }
);



export const updateBookAction = (book) => (
    {
        type: 'updateBook',
        payload: book
    }
);

export const getAllCategoriesAction = (categories) => (
    {
        type: 'getAllCategories',
        payload: categories
    }
);

export const deleteBookAction = (bookId) => (
    {
        type: 'deleteBoook',
        payload: bookId
    }
);

export const addAllBooksAction = (books) => (
    {
        type: 'getALlBooks',
        payload: books
    }
);