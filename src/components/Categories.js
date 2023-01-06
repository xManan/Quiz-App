import React, { useRef, createRef } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import { categories, categoryImg  } from '../data.js'

function Categories() {
    const imgRefs = useRef([])
    imgRefs.current = categories.map((_,idx)=>imgRefs.current[idx] ?? createRef())
    const handleMouseOver = (idx)=>{
        console.log(idx)
        imgRefs.current[idx].current.style['transform'] = 'scale(1.1)'
    }
    const handleMouseOut = (idx)=>{
        imgRefs.current[idx].current.style['transform'] = 'scale(1.0)'
    }
    return (
        <Container>
            <h1 className="text-center mt-5">Categories</h1>        
            <Row md={3} className="px-5">
                {categories.map((category, idx)=>(
                    <Col key={idx} >
                        <Card
                            onMouseOver={()=>handleMouseOver(idx)} 
                            onMouseOut={()=>handleMouseOut(idx)}
                            className="mx-auto my-5" style={{height: '16rem', width: '16rem', overflow: 'hidden'}}>
                            <Link to={'/quiz/'+category}>
                                <Container 
                                    style={{height: "100%", zIndex: '1'}} 
                                    className="position-absolute bg-dark opacity-75" 
                                    ></Container>
                                <Card.Img ref={imgRefs.current[idx]} style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: '0.4s ease'
                                }} className="position-absolute" src={process.env.PUBLIC_URL+"/assets/img/"+categoryImg[idx]} />
                                <Card.Title 
                                    style={{
                                        zIndex: '2',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)'
                                    }} 
                                    className="position-absolute text-white"><h3>{category}</h3></Card.Title>
                            </Link>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Categories
