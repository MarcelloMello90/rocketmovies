import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { NewMovies } from '../pages/NewMovies';
import { Details } from '../pages/Details';
import { Profile } from '../pages/Profile';

export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/newmovies" element={<NewMovies />}/>
      <Route path="/details" element={<Details />}/>
      <Route path="/profile/:id" element={<Profile />}/>
    </Routes>
  )
}