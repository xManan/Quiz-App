import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Navigation from './components/Navigation'
import QuizCarousel from './components/QuizCarousel'
import Categories from './components/Categories'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import QuizContainer from './components/QuizContainer'
import NotFound from './components/NotFound'

function App() {
    return (
        <Router>
            <Navigation />
            <Container className="gx-0" fluid>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/quiz/:category' element={<QuizContainer />} />
                    <Route exact path='/*' element={<NotFound />} />
                </Routes>
            </Container>
        </Router>
    );
}

export default App;
