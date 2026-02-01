# Assignment 4: Book Management System 

##  Project Description
This is my third assignment where I migrated my backend from a simple `data.json` file to a real cloud database — **MongoDB Atlas**. I chose a "Book Management System" as my topic because it fits my Final Project idea. 

The goal of this project was to handle complex object schemas, set up data persistence in the cloud, and build a clean UI to interact with the database.


##  Tech Stack
* **Backend**: Node.js, Express.js
* **Database**: MongoDB Atlas (with Mongoose ODM)
* **Frontend**: HTML5, CSS3
* **Testing**: Postman

##  Database Schema
[cite_start]My `Book` object consists of[cite: 8, 9, 10]:
- `title`: String (Required)
- `author`: String (Required)
- `genre`: String (Required)

##  Architectural Choices (MVC)
To follow industry standards, the project is organized into the following directory structure:


`models/`: Defines Mongoose schemas for Users, Primary, and Secondary objects.


`controllers/`: Contains the logic for handling requests and database operations.


`routes/`: Defines API endpoints and maps them to controllers.


`middleware/`: Handles authentication (JWT), role-based access control (RBAC), and error logging.

## Data Objects
- The API manages two related entities:

- Primary Object: The core data entity (e.g., Blog Post or Product).

- Secondary Object: A related entity (e.g., Comment for a post or Category for a product). Full CRUD (Create, Read, Update, Delete) is implemented for both objects.

## Security & RBAC Implementation
- The system features a secure User model with the following security layers:


- Password Hashing: All user passwords are encrypted using bcrypt before being stored in the database.


- JWT Authorization: Secure JSON Web Tokens are used to protect resources.

- Role-Based Access Control (RBAC):

- Public Access: GET routes are open to all visitors.

- Protected Access: Users must be logged in to interact with specific parts of the API.

- Admin Access: Only users with the "admin" role can perform POST, PUT, and DELETE operations.

##  API Endpoints
| Method | Endpoint | Description | Status Code |
|--------|----------|-------------|-------------|
| POST | `/books` | Add a new book | 201 Created |
| GET | `/books` | Get all books | 200 OK |
| GET | `/books/:id`| Get one book by ID | 200 / 404 |
| PUT | `/books/:id`| Update book info | 200 OK |
| DELETE | `/books/:id`| Delete a book | 200 OK |

## How to run
Run the server: `node server.js`
Open `http://localhost:3000` in your browser.

## Screen site mongodb atlas and postman(1 delete)

<img width="1470" height="875" alt="Снимок экрана 2026-01-18 в 15 35 48" src="https://github.com/user-attachments/assets/290ba9b4-63b0-46c9-ad72-a2eda7cbc71d" />

<img width="1470" height="877" alt="Снимок экрана 2026-01-18 в 15 36 03" src="https://github.com/user-attachments/assets/5238ae8c-cd0e-40f3-bbf0-3432721ef969" />

<img width="1470" height="921" alt="Снимок экрана 2026-01-18 в 15 36 19" src="https://github.com/user-attachments/assets/95f9e80f-327c-4c17-a38a-aed4162f45ea" />

