 Book Inventory Management System

The Book Inventory Management System is a web application built using React that allows users to manage a collection of books. The application provides a user-friendly interface for performing CRUD (Create, Read, Update, Delete) operations on the inventory of books. It fetches book data dynamically from an API and displays it on the landing page. Users can view details of specific books by clicking on them.

 Features

 1. Landing Page/Home Page
- Displays a list of all the books available in the inventory.
- Shows a summary of each book's information, such as its title and author.
- Provides access to CRUD operations directly from this page.

 2. API Integration
- Dynamically fetches book data using an API.
- Ensures that the inventory remains up-to-date and reflects the latest changes to the collection of books.

 3. Book Details Page
- Clicking on a specific book redirects the user to a detailed page.
- Displays additional information about the book, including:
  - Author's name
  - Published date
  - Publisher
  - An overview of the book's content

 4. Responsive and Interactive Design
- The application is designed to adapt seamlessly to various screen sizes and devices.
- Provides an interactive and user-friendly experience for easy navigation and action performance.

 5. Tables on the Screen
- Uses tables to organize and display book data in a structured format.

 6. Scrolling Pages
- Supports scrolling to handle large amounts of data, ensuring smooth navigation.

 7. Data Validation
- Proper validation is applied to all text fields:
  - Author: Validated using a regex to allow only alphabets and spaces.
  - Page Count and Price: Must be integers.
  - Other fields are marked as required.

 Installation

Follow these steps to set up and run the application locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/akashmaskejava2024/Book_Inventry_Management_System.git
   ```

2. Navigate to the project directory:
   ```bash
   cd book_inventry_management_system_frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the application in your browser:
   ```
   http://localhost:3000
   ```


 API Integration



- The application fetches book data from a RESTful API.
- Ensure the API server is running and accessible.
- Configure the API base URL in the application's configuration file (if applicable).

Here are the steps to set up your Spring Boot API using Maven:
1. Clone the repository (if not done yet):
git clone https://github.com/akashmaskejava2024/Book_Inventry_Management_System.git
2. Navigate to the backend folder:
cd book_inventry_management_system_backend
3. Open the project in your IDE (e.g., IntelliJ IDEA or Eclipse):
For IntelliJ IDEA:
	1.	Open IntelliJ IDEA.
	2.	Go to File > Open and navigate to the book_inventry_management_system_backend folder.
	3.	Open the folder.
For Eclipse:
	1.	Open Eclipse.
	2.	Go to File > Import > Existing Maven Projects.
	3.	Navigate to the book_inventry_management_system_backend folder and select it.
4. Install dependencies using Maven:
	•	In the terminal (inside your IDE or command line), run the following Maven command to install the dependencies and build the project:
mvn clean install

5. Set up the database (using the DDL file):
	•	Locate the DDL file: Go to the src/main/resources folder and find the DDL file (it may be named something like schema.sql or ddl.sql).
	•	Create the database:
	1.	Copy and paste the ddl in the file on the workbench and create the database.
6. Run the Spring Boot application:
	•	In IntelliJ IDEA:
	1.	Right-click on the main class (e.g., BookInventoryManagementApplication.java).
	2.	Select Run 'BookInventoryManagementApplication'.
	•	In Eclipse:
	1.	Right-click on the main class (e.g., BookInventoryManagementApplication.java).
	2.	Select Run As > Java Application.
7. Access the Spring Boot API:
The API should now be running at:
http://localhost:8080
This will set up the Spring Boot API with Maven.

 Project Structure

The project is organized as follows:

```
book-inventory-management/
├── node_modules/
├── public/
├── src/
│   ├── Action/
│   │   └── BookAction.js
│   ├── ActionCreator/
│   │   └── BookActionCreator.js
│   ├── BookCRUD/
│   │   ├── AddNewBook.js
│   │   ├── BoookDetailsPage.js
│   │   └── Home.js
│   ├── NavBar/
│   │   └── NavBar.js
│   ├── Reducer/
│   │   └── BookReducer.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   └── store.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

 Usage

1. CRUD Operations:
   - Create: Add new books to the inventory using the form on the landing page.
   - Read: View the list of books and their details.
   - Update: Edit existing book details from the landing page.
   - Delete: Remove books from the inventory directly.

2. Validation:
   - Ensure all fields are correctly filled in based on the validation rules.

3. Responsive Design:
   - Use the application on any device, as it adapts to different screen sizes.

 Validation Rules

- Author: Validated using a regex to allow only alphabets and spaces.
- Page Count and Price: Must be integers.
- Required Fields: All mandatory fields must be filled.

 Technologies Used

- Frontend: React
- API: RESTful API using Spring Boot
- CSS Framework: Bootstrap with responsive design
- Validation: Custom validation logic

 License

This project is licensed under the Mr. Akash Maske.



Feel free to contribute to this project by forking the repository and submitting pull requests. Happy coding!


