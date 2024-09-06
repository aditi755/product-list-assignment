This is a full-stack application for managing products using Node.js, Express, MongoDB, and React.

Demo Video: https://www.loom.com/share/cae8b3f89f91451594aad28b71b069cf?sid=25318a0c-d94b-4c06-a473-5ee2a2f0971e
# Product List Application

## Features
- Add, Edit, Delete, and View products
- Connects to MongoDB Atlas for data persistence
- Simple UI built with React

## Demo

[Watch the demo video on Loom](https://www.loom.com/share/cae8b3f89f91451594aad28b71b069cf?sid=25318a0c-d94b-4c06-a473-5ee2a2f0971e)

## Getting Started

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/product-list-app.git
    cd product-list-app
    ```

2. Install dependencies for the backend:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following:
    ```bash
    MONGODB_URI=your-mongodb-connection-string
    PORT=5000
    ```

4. Start the backend server:
    ```bash
    npm start
    ```

This will start the backend on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the frontend folder:
    ```bash
    cd product-list-frontend
    ```

2. Install frontend dependencies:
    ```bash
    npm install
    ```

3. Start the frontend server:
    ```bash
    npm run dev
    ```

This will start the React frontend on `http://localhost:5173`.

## Usage

- Access the application at `http://localhost:5173` and perform CRUD operations on products.
- The backend will be running at `http://localhost:5000`.

---

### Technologies Used

- Node.js
- Express.js
- MongoDB
- React.js
- Axios

