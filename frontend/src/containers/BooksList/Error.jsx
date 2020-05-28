import React, { Component } from "react";
import styled from "styled-components";
import error from "../../assets/error.jpg"

export const ErrorCard = styled.div`
margin-top:70px;
margin-bottom:auto;
width:100%;
height:100%;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
color:#444053;
` 
export const ErrorImage = styled.img`
width: 300px;
height: 300px;
padding-bottom:10px;
`
export default class Error extends React.Component{
render () {
    return (
        <React.Fragment>
            <ErrorCard>
                <ErrorImage src={error}></ErrorImage>
                <h3>Ooopsie...</h3>
                <h6>No books matching your search. Please try again.</h6>
            </ErrorCard>
        </React.Fragment>
    )
}
} 