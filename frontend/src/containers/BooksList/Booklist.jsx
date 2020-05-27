import React, { Component } from "react";
import styled from "styled-components";
import Book from './Book';

export const List = styled.div`
width: 100%;
display:flex;
flex-direction:row;
justify-content: flex-start;
align-items: left;
height: 100%;
flex-wrap: wrap;
padding-left:130px;
padding-right:100px;
padding-top: 50px;
padding-bottom:50px
`

export default class Booklist extends Component {
    render() {
        return (
            <List>
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
            </List>
        )
    }
}