import './App.css'

import Header from './components/Header'
import Movies from './components/Movies'
import Footer from './components/Footer'
import SingleMovie from './components/SingleMovie'
import Favorites from './components/Favorites'

import { useState } from 'react'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { getMovies } from './data/moviesSlice'
import { useSelector, useDispatch } from 'react-redux'




function App() {


  return (
    <div className='bg-gradient-to-tr from-red-800 to-gray-900 h-fit'>
      <Header/>

      
      <Routes>
        <Route path="/" element={<Movies title={"Новинки 2024 года"}/>} />
        <Route path='/favorites' element={<Favorites/>}></Route>
        <Route exact path='/movies/:id' element={<SingleMovie/>}/>
      </Routes>
      
      <Footer/>
      
    </div>
  )

  
}

export default App
