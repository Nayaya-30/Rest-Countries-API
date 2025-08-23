import { useState, useEffect, useRef, useContext } from 'react'
import { Countrypage } from './pages/Countrypage.jsx';
import { Homepage } from './pages/Homepage.jsx';
import { Head } from './components/Header.jsx'
import 'rsuite/dist/rsuite.min.css';
import './App.css'


function App() {
    console.log('App')
    return (
        <main className={'bg'}>
            <Head />
            <Homepage />
            <Countrypage />
        </main>
    )
}

export default App
