import React from 'react'
import './App.css';

import Navbar from './components/navbar'
import AboutGrid from './components/about_grid';
import Footer from './components/footer'

function About() {
    return (
        <>
        <div className="App">
            <header>
                <Navbar />
            </header>
            <main>
                <AboutGrid />
            </main>
            <Footer />
        </div>
        </>
    )
}

export default About
