import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { categories, carouselImg } from '../data.js'

function QuizCarousel() {
    console.log(categories)
    return (
        <Carousel>
            {categories.map((category,idx)=>(
                <Carousel.Item key={idx}>
                        <img
                        style={{height: '70vh', objectFit: 'cover'}}
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL+"/assets/img/carousel/"+carouselImg[idx]}
                        alt="First slide"
                        />
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default QuizCarousel
