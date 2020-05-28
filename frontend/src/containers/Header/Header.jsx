import React, { Component } from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from "styled-components";
import Filters from './Filters'


export const RestyledRow = styled(Row)`
margin: 0;
width: 100%;
height: ${props => props.height};
background: ${props => props.color? props.color :"#9B51E0"};
text-align: center;
align-content: flex-end;
color: white;
font-size: 10px;
padding-left: 15px;

`;

export class Header extends Component {
    btnClick = () => {
        console.log('ok')
    }
    render() {
        return (
            <React.Fragment>
                <RestyledRow key="title" height="60px" >
                        <Col xs={3}><h3>&#128218;  BOOKSHOP</h3></Col>
                        <Col xs={6}></Col>
                </RestyledRow>
                <RestyledRow key="filters" height="90px">
                    <Filters></Filters>
                </RestyledRow>
            </React.Fragment>
    )
    }
}