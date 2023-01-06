import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function StartPage({category, setStarted, setLoading}) {
    return (
        <Card style={{height: '80vh'}} className="text-center">
            <Card.Title className="my-5">
                <h1>
                    {category} Quiz
                </h1>
            </Card.Title>
            <Card.Text>Questions: 10</Card.Text>
            <Card.Text>Time Limit: 5 mins</Card.Text>
            <Button className="w-25 mx-auto mt-5" onClick={()=>{
                setStarted(true)
                setLoading(true)
            }}>Start</Button>
        </Card>
    )
}

export default StartPage
