import { useState } from 'react'
import './App.css'
import SignUp from './components/sign-up'
import { Route, Routes } from 'react-router-dom'
import LogIn from './components/log-in'

function App() {

    return (
        <Routes>
            <Route path="/sign-up" element={<SignUp />}/>
            <Route path="/log-in" element={<LogIn />} />
        </Routes>
    )
}

export default App
