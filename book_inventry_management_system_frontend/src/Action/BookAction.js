



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