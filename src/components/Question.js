import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Question({currentQ, ques, checkedAns, setCheckedAns}) {
    const [reload, setReload] = useState(false)
    return (
        <Container> 
            <Row md={2}>
                <Col md="auto">
                    <h4>Q.</h4>
                </Col>
                <Col md="auto">
                    <h4>{ques.question}</h4>
                </Col>
            </Row>
            <Form className="my-4">
                {["answer_a", "answer_b", "answer_c", "answer_d", "answer_e", "answer_f"].map((ans,idx)=>{
                    return (
                        ques.answers[ans] && <Form.Check
                            key={idx} 
                            type="radio" 
                            name="answers" 
                            label={ques.answers[ans]} 
                            checked={checkedAns[currentQ]==ans}
                            onClick={()=>{
                                let ca = checkedAns
                                ca[currentQ] = ca[currentQ]==ans ? null : ans
                                setCheckedAns(ca)
                                setReload(!reload)
                            }}
                            />
                    )
                })}
            </Form>
        </Container>
    )
}

export default Question
