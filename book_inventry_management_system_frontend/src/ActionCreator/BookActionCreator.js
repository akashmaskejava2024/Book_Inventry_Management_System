import { addAllBooksAction,addNewBookAction,deleteBookAction, getAllCategoriesAction, updateBookAction } from "../Action/BookAction";


export const addNewbookActionCreator =(book, dispatch, navigate)=>{

     
    const URL = "http://localhost:8080/books";
    fetch(URL,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(book)
            
        }
    )
        .then(res => res.json())
        .then(data => {

             console.log(data.data);
             
            dispatch(addNewBookAction(data.data));
            navigate('/');
        

        });


    
}




export const updatebook = (book , dispatch, navigate) =>{

    console.log("Book Object inside the updateActionCreator " + book.category_id);
    
    const URL = "http://localhost:8080/books";
    fetch(URL,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(book)
            
        }
    )
        .then(res => res.json())
        .then(data => {

             console.log(data.data);
             
            dispatch(updateBookAction(data.data));
            navigate('/');
            
            // alert(data.data[0].name);
            // alert(data.message);

        });


}



export const getAllCategories = (dispatch) => {
    const URL = "http://localhost:8080/categories";
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

            console.log(data.data);
            
            dispatch(getAllCategoriesAction(data.data));

            

        });



}



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
            getAllCategories(dispatch);
            // alert(data.data[0].name);
            // alert(data.message);

        });
}