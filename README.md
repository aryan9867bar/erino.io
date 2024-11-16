                    CRM Contact Management Application

Description :-
The CRM Contact Management Application is a full-stack application designed to manage contacts efficiently. It allows users to add, view, edit, and delete contact details, including names, email addresses, phone numbers, company, and job titles. The application is built with responsiveness and user-friendliness in mind, featuring a clean interface and robust functionality.

Features:-
-- Add new contacts with detailed information.
-- Edit existing contacts.
-- Delete contacts from the database.
-- View a list of all contacts in a responsive table.
-- Header and footer for enhanced UI/UX.
-- Error handling for missing or invalid input.
-- Fully responsive design for desktop and mobile use.

Technical Stack:-
Frontend:-
-- React.js: A modern JavaScript library for building user interfaces.
-- Material-UI: For responsive and attractive UI components.
-- Axios: For making API requests.
Backend:-
-- Node.js: Runtime environment for server-side JavaScript.
-- Express.js: Web framework for handling API routes.
-- MongoDB: NoSQL database for storing contact data.

Folder Structure:-
Frontend:-
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── ContactForm.js
│   │   ├── ContactTable.js
│   │   ├── Footer.js
│   │   └── Header.js
│   ├── pages/
│   │   └── Home.js
│   ├── services/
│   │   └── contactService.js
│   └── App.js
├── package.json

Backend:-
backend/
├── controllers/
│   └── contactController.js
├── models/
│   └── Contact.js
├── routes/
│   └── contactRoutes.js
├── server.js
├── .env
├── package.json


Setup Instructions:-
1. Prerequisites:-
-- Install Node.js (version 14 or higher).
-- Install MongoDB.
-- A code editor, such as VSCode.

2. Clone the Repository:-
-- git clone https://github.com/aryan9867bar/erino.io.git
-- cd erino.io

3. Install Dependencies:-
For Backend:-
-- cd backend
-- npm install
For Frontend:-
-- cd frontend
-- npm install

4. Configure Environment Variables
Backend:-
Create a .env file in the backend directory and add the following:
PORT=5000
MONGO_URI=mongodb://localhost:27017/crm

5. Run the Application
Backend:-
Start the backend server:-
-- cd backend
-- nodemon server.js
Frontend:-
Start the React frontend:-
-- cd frontend
-- npm start

-- Access the application at http://localhost:3000

Database Schema:-
MongoDB Collection: contacts
{
  "_id": "ObjectId",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "phone": "string",
  "company": "string",
  "jobTitle": "string",
  "createdAt": "Date",
  "updatedAt": "Date"
}
Ensure MongoDB is running locally or replace the MONGO_URI in .env with your connection string for remote databases.


Application Flow
Frontend:-
-- ContactForm Component: Handles the addition and editing of contacts.
-- ContactTable Component: Displays a responsive table of contacts with action buttons for editing and deleting.
-- Error Handling: Alerts users for missing required fields or server errors.
-- Styling: Built with Material-UI for responsiveness and a clean, modern design.
Backend

API Endpoints:-
-- GET /contacts: Fetch all contacts.
-- POST /contacts: Add a new contact.
-- PUT /contacts/:id: Update an existing contact.
-- DELETE /contacts/:id: Delete a contact by ID.
-- Error Handling: Returns appropriate HTTP status codes and error messages for invalid requests.

Major Technical Decisions:-
-- React with Material-UI: Chosen for its robust ecosystem and ability to create responsive, modern user interfaces.
-- Node.js with Express: Offers lightweight and efficient backend services.
-- MongoDB: Suitable for handling flexible schemas and dynamic contact data.
-- Axios: Simplifies API integration and error handling in the frontend.


How It Works:-
- Adding a Contact:
-- Fill out the form and click the "Add Contact" button.
-- The contact is sent to the backend and stored in MongoDB.
- Editing a Contact:
--Click the "Edit" button for a specific contact.
--The form is pre-populated with the selected contact's data for editing.
- Deleting a Contact:
-- Click the "Delete" button for a specific contact.
-- The contact is removed from the database and the table is updated.
- Responsive Design:
-- Material-UI ensures the app adapts to different screen sizes for a seamless user experience.

Future Enhancements:-
-- Add user authentication for secure access.
-- Implement search and filter functionality.
-- Integrate export options (e.g., CSV, Excel) for contact data.