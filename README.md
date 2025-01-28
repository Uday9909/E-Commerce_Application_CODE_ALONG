## Ecommerce-Follow-Along

### **Description and Summary**
Welcome to the **Ecommerce-Follow-Along** project! It's an exciting, mentor-guided journey in which we build a complete e-commerce platform with the MERN stack. Through this process, we will engage in creating scalable APIs, securing authentication, creating database schemas, and setting up the backend in Node.js using Express.

---
## **Milestone 1: Project Overview**
### Why the MERN Stack?  
The MERN stack is one of the most popularly used full stacks in web development for the following reasons:
- It is built using **JavaScript** throughout (frontend + backend), making it beginner-friendly.  
- Every component is powerful yet lightweight, letting us build modern, scalable web applications.
 
Here's what MERN contains:  
- **MongoDB**: A NoSQL database to store our application data.  
- **Express**: A framework for building the backend logic.  
- **React**: A library for building our user interface.  
- **Node.js**: A runtime environment for executing JavaScript on the server.  

### **What This Project Builds**
#### **REST API Structure and Endpoints**
APIs (Application Programming Interfaces) let the frontend and backend communicate. We’ll build a REST API that supports:  
1. **User Authentication**: Allowing users to register and log in securely.  
2. **Product Management**: Adding, updating, and retrieving product details.  
3. **Order Handling**: Seamless handling of customer orders.

The APIs will connect to our MongoDB database and return data formatted in JSON for accessibility and easy testing.

#### Database Schema Design
For this MongoDB project:  
- Define collections: examples include products, users, and orders.  
- Structure relationships, such as user orders and product categories.

#### **Role of Authentication**
Authentication is all about verifying who the user is. It’s what keeps an e-commerce site safe and ensures users can make purchases, view orders, or access personal data securely. We’ll implement secure login and registration features that protect sensitive information.

---
### **What I Learned**
This project will help you:
- Design scalable APIs for real-world applications.
- Build a strong backend using Node.js and Express.
- Design structured databases with MongoDB. 
- Implement secure authentication mechanisms. 
- Use React to build a modern, user-friendly interface.

---
## **Milestone 2: Project Setup and Login Page**
### Day 2: Login Page Implementation
**Key Features**
- **State Management:** Utilized the useState hook to manage user credentials (email and password).
- **Dynamic Input Handling:** Added a handleChange function to dynamically update the state as the user types in the form fields.
- **Form Submission:** Created a handleClickLogin function to handle form submission (API integration is currently commented out).
- **Responsive Design:** Designed the login page using Tailwind CSS for a modern and responsive layout.

```javascript
const [credentials, setCreds] = useState({
  email: "",
  password: ""
});

const handleChange = (event) => {
  const { name, value } = event.target;
  setCreds({
    ...credentials,
    [name]: value
  });
};

const handleClickLogin = (event) => {
  event.preventDefault();
  console.log("Submitted Credentials:", credentials);
};
```

**Next Steps:**
- Integrate backend API for user authentication.
- Implement proper error handling and form validation.
- Enhance UI/UX by displaying success or error messages after login attempts.

---
## **Milestone 3: Backend Setup**
### Key Features Implemented
1. **Backend Folder Structure:**
   - Organized files with separate directories for routes, controllers, models, and middleware.
   - Laid the foundation for scalable and maintainable code.
2. **Node.js Server Setup:**
   - Configured the server using Express.
   - Established smooth communication between the client and server.
3. **MongoDB Integration:**
   - Connected the server to MongoDB for reliable data storage.
4. **Error Handling:**
   - Implemented clear error messages for debugging and user feedback.

---
## **Milestone 4: Livebooks Backend Web Development**
### What’s the Plan?
1. **User Model:**
   - Used Mongoose to define the user schema and structure data.
2. **User Controller:**
   - Wrote functions to manage user-related actions like adding new users and fetching details.
3. **Enable Multer for File Uploads:**
   - Added file upload functionality to support features like profile pictures.
4. **Update README:**
   - Documented progress.

---
## **Milestone 5: React Signup Page**
### Features
- User input fields for Full Name, Email, and Password.
- Password visibility toggle for easy entry.
- Avatar upload functionality.
- Form submission with `multipart/form-data`.

### Next Steps
- Enhance form validation.
- Integrate API for user registration.

---
## **Milestone 6: Secure User Signup**
### Features Implemented
- **Password Encryption:** Used bcrypt to hash passwords before saving them in the database.
- **Secure Data Storage:** Stored user data (name, email, and hashed password) securely.

**Why Encryption Matters:**
- Protects user data during breaches.
- Complies with regulations like GDPR and PCI-DSS.
- Prevents password theft.

---
## **Milestone 7: User Login Implementation**
### Steps
1. Build the login endpoint to accept credentials.
2. Fetch user data from the database.
3. Compare input passwords with stored hashed passwords.

---
## **Milestone 8: Add Product Page**
### New Feature: Add Products Page

**Features Implemented:**
- **React Form:** Created a form for adding product details, including name, price, category, and description.
- **State Management:** Used the useState hook to manage form inputs dynamically.
- **File Upload:** Integrated Multer for image uploads.
- **Responsive Design:** Used Tailwind CSS for a user-friendly layout.
- **Backend API Integration:** Connected the form to the backend API for saving product details to the database.

**Code Snippet:**
```javascript
const handleAddProduct = (event) => {
  event.preventDefault();
  console.log("Adding Product:", productDetails);
  // Integrate with API
};
```

**Next Steps:**
- Add form validation.
- Display success/error messages.
- Enable product image preview before upload.