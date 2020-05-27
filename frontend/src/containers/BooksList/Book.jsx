import React, { Component } from "react";
import styled from "styled-components";
import Card from 'react-bootstrap/Card'
export const BookCard = styled(Card)`
width: 18rem;
height:250px;
margin-top:30px;

margin-bottom:30px;
margin-right: 30px;
background: transparent;
`

export default class Book extends Component {

    render() {
        return (
            <React.Fragment>
                <BookCard>
                <Card.Body>
                    <Card.Title>Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Author</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                </BookCard>
            </React.Fragment>
        )
    }

}