import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Question from './Question'
import { TIME_LIMIT } from '../config.js'

function Questions({questions, loading, setEnded, started, setStarted, checkedAns, setCheckedAns}) {
    const [currentQ, setCurrentQ] = useState(0)
    const [timer, setTimer] = useState(TIME_LIMIT*60)
    useEffect(() => {
        let interval = null;
        if (started) {
            interval = setInterval(() => {
                if(timer === 0){
                    setStarted(false)
                    setEnded(true)
                }
                setTimer(timer => timer - 1);
            }, 1000);
        } else if (!started && timer !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [started, timer]);

    let NPBtns = 
        <Container className="my-4">
            {currentQ !=0 && <Button variant="dark" className="me-2" onClick={()=>setCurrentQ(currentQ-1)}>Prev</Button>}
            {currentQ != questions.length-1 && <Button variant="dark" onClick={()=>setCurrentQ(currentQ+1)}>Next</Button>}
            {currentQ == questions.length-1 && <Button variant="success" onClick={()=>{
                console.log(checkedAns)
                setStarted(false)
                setEnded(true)
            }}>Submit</Button>}
        </Container>
    return (
        <Container>
            {
            questions.length > 0 
                ? <>
                    <Card className="border-0 px-5 my-2">
                        <Card.Title className={(timer < 60 ? "text-danger" : "text-dark")+" text-end"}>
                            {Math.floor(timer/60)}:{String(timer%60).padStart(2,'0')}
                        </Card.Title>
                    </Card>
                    <Row className="d-flex flex-row flex-nowrap overflow-auto mb-5">
                        {questions.map((_,idx)=>(
                            <Col key={idx}>
                                <Button 
                                    style={{
                                        width: '4rem',
                                        height: '4rem',
                                        borderRadius: '50%'
                                    }} 
                                    variant={currentQ == idx ? "dark" : (checkedAns[idx]==null) ? "light border" : "success"}  
                                    onClick={()=>setCurrentQ(idx)}>{idx+1}</Button>
                            </Col>
                        ))}
                    </Row>
                    <Question 
                        currentQ={currentQ} 
                        ques={questions[currentQ]} 
                        checkedAns={checkedAns} 
                        setCheckedAns={setCheckedAns} />
                    {NPBtns}
                    </>
                : <p>{loading ? "loading" : "No questions found"}</p>
        }
        </Container>
    )
}

export default Questions
