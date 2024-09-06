import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home/Home'
import { Game } from './pages/Game/Game'
import { Details } from './pages/Details/Details'
import Header from './components/Header/Header'
export const Router = () => {
  return (
    <div>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/game-on' element={<Game/>}/>
                <Route path='/details' element={<Details/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
