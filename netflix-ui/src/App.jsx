import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Player from './pages/Player';
import MoviePage from './pages/Movies';
import TVShows from './pages/TVShows';
import UserListedMovies from './pages/UserLikedMovies';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/player' element={<Player />} />
        <Route exact path='/movies' element={<MoviePage />} />
        <Route exact path='/tv' element={<TVShows />} />
        <Route exact path='/mylist' element={<UserListedMovies />} />
        <Route exact path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
