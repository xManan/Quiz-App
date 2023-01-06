import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import QuizCarousel from './QuizCarousel'
import Categories from './Categories'

function App() {
    return (
        <Container className="gx-0" fluid>
            {/* <QuizCarousel /> */}
            <Categories />
        </Container>
    );
}

export default App;
