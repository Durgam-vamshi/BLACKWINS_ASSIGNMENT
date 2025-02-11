# 📞 **Contact Management API**

## 🔑 **Description**
A Node.js application for managing contacts. This API allows you to perform CRUD operations (Create, Read, Update, Delete) on contacts. It is secured with **JWT-based authentication**, ensuring that only authorized users can access and modify contact information.

## 🛠️ **Tech Stack**
- **Node.js** 🟩
- **Express.js** 🌐
- **MongoDB** 🗄️
- **JWT (JSON Web Tokens)** 🔒
- **Mongoose** 🐒 (MongoDB Object Modeling)
- **Cors** 🌍 (Cross-Origin Resource Sharing)
- **Dotenv** 🌱 (Environment Variables Management)

## ⚡ **Features**
- JWT-based authentication for secure access.
- Full CRUD functionality for managing contacts.
- Search functionality based on name or email.
- Data validation for contact creation and updates.

---

## 📋 **Setup Instructions**

### 🚨 **Prerequisites**
Before running the project, ensure you have the following:
- **Node.js** (v12 or higher)
- **MongoDB** (either locally or hosted on MongoDB Atlas)

### 🧑‍💻 **Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/contact-management-api.git
   cd contact-management-api



Install dependencies:

bash
Copy
Edit
npm install
Create a .env file in the root directory and add the following environment variables:

env
Copy
Edit
JWT_SECRET=your_jwt_secret_key
MONGO_URI=your_mongo_database_url
PORT=5000
Replace your_jwt_secret_key with your secret JWT key.
Replace your_mongo_database_url with your MongoDB connection string.
Run the application:

bash
Copy
Edit
npm start
The server will be running on http://localhost:5000.

🚀 API Endpoints
🔐 Authentication
POST /api/auth/login
Login and get a JWT token. Provide the following in the request body:

email: User's email.
password: User's password.
Example Request:
json
Copy
Edit
{
  "email": "user@example.com",
  "password": "password123"
}
Response:
json
Copy
Edit
{
  "token": "your_jwt_token_here"
}
📇 Contacts
GET /contacts
Retrieve a list of contacts. Optionally, use query parameters for filtering:

name: Optional. Filter by name (case-insensitive).
email: Optional. Filter by email (case-insensitive).
GET /contacts/:id
Retrieve a contact by ID.

POST /contacts
Create a new contact. Required fields in the request body:

name: Name of the contact.
email: Email of the contact.
phone: Phone number of the contact.
address: Address of the contact.
PUT /contacts/:id
Update an existing contact. Provide the data in the request body:

name: (Optional) Updated name.
email: (Optional) Updated email.
phone: (Optional) Updated phone.
address: (Optional) Updated address.
DELETE /contacts/:id
Delete a contact by ID.

🧑‍💻 Middleware
authenticate
Secures routes by verifying the presence of a valid JWT token. Unauthorized requests return a 401 error.

validateContact
Validates the contact data before creating or updating a contact to ensure the correct format.

💥 Error Handling
A custom error handler middleware is used to catch and manage any errors, responding with meaningful error messages.

🧪 Testing
You can test the API using tools like Postman or Insomnia. Make sure to add the JWT token to the Authorization header in protected routes as Bearer <token>.

📍 Example Usage
Login to get a JWT token:

POST /api/auth/login

Request Body:

json
Copy
Edit
{
  "email": "user@example.com",
  "password": "password123"
}
Response:

json
Copy
Edit
{
  "token": "your_jwt_token_here"
}
Get All Contacts (with JWT token):

GET /contacts

Authorization: Bearer <your_jwt_token_here>

🛠️ Contributions
We welcome contributions! Feel free to fork this repository and submit pull requests. For bug reports or feature requests, please open an issue.

📜 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙌 Acknowledgements
Node.js team for creating a fantastic server-side runtime.
MongoDB for an awesome NoSQL database solution.
JWT for secure token-based authentication.
Express.js for simplifying API development.
🌟 Enjoy building with the Contact Management API! 🌟
markdown
Copy
Edit

### Key Improvements:
- Added **icons** to make it visually appealing.
- Used **section headings** for better readability.
- Provided examples for **API requests and responses** with **JSON formatting**.




