import { addAllBooksAction,deleteBookAction } from "../Action/BookAction";

export const deleteBook = (bookId, dispatch) => {

    const URL = "http://localhost:8080/books/delete/" + bookId;
    fetch(URL,
        {
            method: 'DELETE'
        }
    ) .then(res => {
        // console.log("Response Status: beofore JSON", res); 


        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();  
    })
    .then(res => {
        console.log("Response Status:", res); 
                if (res.message === "Deleted") {
            // Dispatch the delete action if successful
            dispatch(deleteBookAction(res.data.id));
        } else {
            alert("Some error in deleting the book");
        }
    })
        
}


export const getAllBooksActionCreator = (dispatch) => {

    const URL = "http://localhost:8080/books";
    fetch(URL,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'Application/json'
            }
        }
    )
        .then(res => res.json())
        .then(data => {

            dispatch(addAllBooksAction(data.data));
            // alert(data.data[0].name);
            // alert(data.message);

        });
}