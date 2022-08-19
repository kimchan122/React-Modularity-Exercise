import React from "react";
import Card from 'react-bootstrap/Card';
import Participated from "../../data/Participated.json";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { Slide } from "react-awesome-reveal";
import { BlackStyleBox, CardScriptStyle } from "../commons/DPCards";

const data = Participated.data;

export const ParticipatedCards = () => {
    return (
        <Container>
            <Row xxs={1} xs={1} sm={1} md={2} lg={3} xl={4} xxl={4} xxxl={4}>
                {data.map(d => (
                    <Slide triggerOnce={true}>
                        <BlackStyleBox>
                            <Card>
                                <Card.Header as="h5" style={{ height: "3em", overflow: "hidden", display: "-webkit-box", alignItems: "center", verticalAlign: "middle", WebkitLineClamp: "2", WebkitBoxOrient: "vertical" }}>{d.name}</Card.Header>
                                <Card.Body>
                                    {/* image */}
                                    <CardScriptStyle>
                                        <div>{d.result}</div>
                                        <div>{d.date}</div>
                                        <div>{d.script}</div>
                                        <div>{d.resulturl}</div>
                                        <div>{d.githuburl}</div>
                                    </CardScriptStyle>
                                </Card.Body>
                            </Card>
                        </BlackStyleBox>
                    </Slide>
                ))}
            </Row>
        </Container>
    )
}