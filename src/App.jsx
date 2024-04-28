import './App.css'

import Header from './components/Header'
import Movies from './components/Movies'
import Footer from './components/Footer'
import SingleMovie from './components/SingleMovie'

import { useState } from 'react'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { getMovies } from './data/moviesSlice'
import { useSelector, useDispatch } from 'react-redux'




function App() {


  return (
    <div className='bg-gradient-to-tr from-red-800 to-gray-900 h-auto'>
      <Header/>

      {/* {/* <Movies title="Новинки за 2024 год"/> */}
      {/* <Movies title="Детектив"/> */}
      <Routes>
        <Route path="/" element={<Movies title={"Новинки 2024 года"}/>} />
        <Route exact path='/movies/:id' element={<SingleMovie/>}/>
      </Routes>
      <Footer/>
      
    </div>
  )

  
}

export default App