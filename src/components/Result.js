import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

function Result({questions, checkedAns}) {
    let totalQues = questions.length
    let totalAttempted = checkedAns.filter((ans)=>ans!=null).length
    let totalCorrect = 0
    for(let i=0; i<totalQues; ++i){
        if(checkedAns[i]!=null){
            if(questions[i].correct_answers[checkedAns[i]+"_correct"] == "true"){
                ++totalCorrect
            }
        }
    }
    return (
        <Container>
            <Card>
                <Card.Title style={{fontSize: "4rem"}} class="mb-5 text-center">
                    Test Submitted Succesfully!
                </Card.Title>
                <Card.Text style={{fontSize: "1.4rem"}} class="text-center">Attempted: {totalAttempted}/{totalQues}</Card.Text> 
                <Card.Text style={{fontSize: "1.4rem"}} class="text-center">Correct: {totalCorrect}/{totalQues}</Card.Text> 
                <Card.Text style={{fontSize: "3.2rem"}} class="my-5 text-center">Score: {100*totalCorrect/totalQues}%</Card.Text> 
            </Card>
        </Container>
    )
}

export default Result
