import React, { Component } from "react";
import styled from "styled-components";
import {Button} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { withRouter } from "react-router-dom";
export const BookCard = styled(Card)`
width: 18rem;
height:250px;
margin-top:30px;

margin-bottom:30px;
margin-right: 30px;
background: transparent;

p.card-text{
    margin: 0;
    font-size: 14px;
}
button{
    position: absolute;
    bottom:2px;
    left:2px;
}
`

export class Book extends Component {
    
    render() {
        return (
            <React.Fragment>
                <BookCard>
                <Card.Body>
                    <Card.Title>{this.props.book.Title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.book.Author}</Card.Subtitle>
                    <Card.Text>{`Pages: ${this.props.book.Pages}`} </Card.Text>
                    <Card.Text>{`Category: ${this.props.book.Category}`} </Card.Text>
                    <Card.Text>{`Format: ${this.props.book["File format"]}`}</Card.Text>
                    <Card.Text>{`Size: ${this.props.book["File size"]}`}</Card.Text>
                    <Button variant="link"  onClick={() => this.props.history.push(`/book/${1}`)}>See more info</Button> 
                </Card.Body>
                </BookCard>
            </React.Fragment>
        )
    }s

};


export default withRouter(Book);