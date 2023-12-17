# MERN Netflix Clone

<img src="https://github.com/Shaban-Eissa/MERN-Netflix-Clone/assets/49924090/a05f5f06-427c-4ae3-9efe-e571c1f10a45" width="200" height="100" />


A Netflix clone built using the MERN stack (MongoDB, Express, React, Node.js). This project replicates the UI of the Netflix platform and includes features such as user authentication, filter movies and TV shows, and more.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Demo

<img src="https://github.com/Shaban-Eissa/MERN-Netflix-Clone/assets/49924090/ba63ad42-6861-4504-ac84-e3bba02cf355" width="900" height="380" />


Check out the live demo \[here\](#).

## Features

- User authentication (sign up, login)
- Browse movies
- View movie details including trailers
- Add movies to the watchlist

## Technologies Used

- **Frontend:**
  - React
  - Redux for state management
  - Axios for API requests
  - React Router for navigation
  - Styled-Components for styling

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB for database
  - Mongoose for ODM
  
- **Authentication:**
  - Firebase

- **Other:**
  - TMDB API for movie data
  
## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Shaban-Eissa/MERN-Netflix-Clone.git
   ```

2. Change into the project directory:

   ```bash
   cd MERN-Netflix-Clone
   ```

2. Install dependencies for both the server and client:
    
    ```bash
    cd netflix-ui
    npm install
    
    cd netflix-backend
    npm install
    ```
    
3. Create a `.env` file in the netflix-backend directory and set the following variables:
    
    ```env
    MONGODB_URI=your_mongodb_uri
    ```
    
    Replace `your_mongodb_uri` with your MongoDB connection string.

4. Create a `.env` file in the netflix-ui directory and set the following variables:
    
    ```env
    REACT_APP_API_KEY = your_TMDB_api_key
    REACT_APP_TMDB_BASE_URL = https://api.themoviedb.org/3
    ```
    
    Replace `your_TMDB_api_key` with your API key from your TMDB account.
    
5. Run the server:
    
    ```bash
    cd netflix-backend
    npm run dev
    ```
    
6. Run the client:
    
    ```bash
    cd netflix-ui
    npm start
    ```
    

The application should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

Open your browser and go to [http://localhost:3000](http://localhost:3000). Sign up or log in to access the Netflix clone features. Explore and enjoy the Netflix-like experience!

## Contributing

Feel free to contribute to this project. Open an issue or submit a pull request to suggest improvements or add new features.

