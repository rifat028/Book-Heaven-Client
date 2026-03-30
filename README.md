## 📖 The Book Haven

### ✨ Project Overview

**The Book Haven** is a full-stack web application designed as a personal digital library management system. Authenticated users can explore, add, update, and delete books, centralizing their library data. The project showcases robust integration of a **React** frontend, a **Node.js + Express.js** backend, and **MongoDB Atlas** for data persistence, secured with **Firebase Authentication**.


### 🛠️ Core Technologies

The application is built using a modern **MERN-stack** architecture with:

* **Frontend:** **React** (with React-Router)
* **Styling:** **Tailwind CSS**
* **Authentication:** **Firebase**
* **Backend:** **Node.js** & **Express.js**
* **Database:** **MongoDB Atlas**

### 🌟 Main Features

* **Secure Authentication:** Implements **Firebase Authentication** (Email/Password & Google Login).
* **Full CRUD Functionality:** Users can **C**reate, **R**ead, **U**pdate, and **D**elete books, with the ability to manage **only** the books they have personally added.
* **Protected Routes:** Critical routes (`/add-book`, `/myBooks`, `/update-book/:id`) are protected, ensuring only logged-in users can access them.
* **Theming & Sorting:** Includes a **Dark/Light Theme Toggle** and advanced filtering/sorting by **Rating** on the All Books page.
* **Live Comments:** Authenticated users can add comments on the book details page which update in real-time.

### 📦 Project Dependencies

The client-side project utilizes the following key packages:

* `aos`: Scroll animations.
* `firebase`: Authentication services.
* `react-hot-toast`: Custom success/error messages.
* `react-icons`: Vector icons.
* `react-spinners`: Loading Spinners during data fetching.
* `react-tooltip`: Informative tooltips.
* `sweetalert2`: Custom modal and confirmation dialogs.
* `swiper`: Dynamic carousels.

### 💻 Local Installation Guide

To run **The Book Haven** locally, you must set up both the server and client.

#### 1. Backend Setup (`Book-Heaven-Server`)
1.  **Clone the Server Repository:** `git clone https://github.com/rifat028/Book-Heaven-Server.git` and `cd Book-Heaven-Server`.
2.  **Install Dependencies:** `npm install`.
3.  **Environment Variables:** Create a `.env` file with your `PORT`, `DB_USER`, `DB_PASS`, etc.
4.  **Run the Server:** `npm start` (Runs on `http://localhost:3000`).

#### 2. Frontend Setup (`Book-Heaven-Client`)
1.  **Clone the Client Repository:** `git clone https://github.com/rifat028/Book-Heaven-Client.git` and `cd Book-Heaven-Client`.
2.  **Install Dependencies:** `npm install`.
3.  **Environment Variables:** Create a `.env` file with your **Firebase config** and `VITE_SERVER_URL=http://localhost:3000`.
4.  **Run the Client:** `npm run dev` (Runs the app in your browser).

### 🔗 Project Links

| Resource | URL |
| :--- | :--- |
| **Live Website** | [https://the-book-heaven-by-rifat.netlify.app](https://the-book-heaven-by-rifat.netlify.app) |
| **Client Repository** | [https://github.com/rifat028/Book-Heaven-Client](https://github.com/rifat028/Book-Heaven-Client) |
| **Server Repository** | [https://github.com/rifat028/Book-Heaven-Server](https://github.com/rifat028/Book-Heaven-Server) |
