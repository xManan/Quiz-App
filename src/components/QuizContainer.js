import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import StartPage from './StartPage'
import Questions from './Questions'
import Result from './Result'
import { useParams } from 'react-router-dom'
import { BASE_URL, QUES_LIMIT } from '../config.js'

function QuizContainer() {
    const API_KEY = process.env.REACT_APP_QUIZ_API_KEY
    const { category } = useParams()
    const [ques, setQues] = useState([])
    const [started, setStarted] = useState(false)
    const [ended, setEnded] = useState(false)
    const [loading, setLoading] = useState(false)
    const [checkedAns, setCheckedAns] = useState([])
    useEffect(()=>{
        ;(async()=>{
            let response = await fetch(`${BASE_URL}/questions?apiKey=${API_KEY}&tags=${category}&limit=${QUES_LIMIT}`)
            let data = await response.json()
            console.log(await data)
            setQues(data.error ? [] : data)
            setLoading(false)
        })()
    }, [category])

    useEffect(() => {
        setCheckedAns(ques.map(()=>null))
        console.log("ca:",checkedAns)

    }, [ques])
    return (
        <Container className="my-4">
            {
            started 
                ? <Questions 
                    questions={ques} 
                    loading={loading} 
                    setEnded={setEnded} 
                    started={started}
                    setStarted={setStarted} 
                    checkedAns={checkedAns} 
                    setCheckedAns={setCheckedAns}/> 
                : ended 
                    ? <Result questions={ques} checkedAns={checkedAns} />
                    : <StartPage category={category} 
                    setStarted={setStarted} 
                    setLoading={setLoading}/>
            }
        </Container>
    )
}

export default QuizContainer
