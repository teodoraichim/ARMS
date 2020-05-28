import React, { PureComponent } from "react";
import styled from "styled-components";
import {RestyledRow} from "../Header/Header"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getBook, restBook } from "../../actions/bookActions";

export const Button  = styled.button`
border: 0px;
background: none;
color: white;
cursor: pointer;
font-size:20px;
align-self:center;
position: absolute;
left: 3px;
margin-bottom:10px;
:focus{
    
    outline: none;
  
}
`

export class BookDetails extends PureComponent {


    componentDidMount() {
        this.props.getBook(this.props.match.params.id);
    }
    componentWillUnmount() {
        this.props.restBook();
    }
    

    render() {
        const book = this.props.currentBook;
        console.log(book)
        return(
            <React.Fragment>
                <RestyledRow height="60px" style={{alignContent: "center"}}>
                    <Button onClick={() =>  this.props.history.push('/')}>&#60;Go Back</Button>
                </RestyledRow>
                <Container style={{width:"60%", paddingTop:"50px"}}>
                    <Row style={{alignContent: "center", marginBottom:"20px", textAlign:"center"}}>
                        <Col xs={3}><img src={book.ImageLink} /></Col>
                        <Col style={{paddingTop: "50px"}}>
                            <h3>{book.Title}</h3>
                            <h6>{book.Authors}</h6>
                        </Col>
                    </Row>
                    <p>{book.Description}</p>
                    <br></br>
                    <span><strong>Publish Date: </strong>{book.PublishedDate}</span><br></br>
                    <span><strong>Publisher: </strong>{book.Publisher}</span><br></br>
                    <span><strong>Pages: </strong>{book.Pages}</span><br></br>
                    <span><strong>Language: </strong>{book.Language}</span><br></br>
                    <span><strong>Isbn: </strong>{book.Isbn}</span><br></br>
                    <span><strong>Format: </strong>{book.Format}</span><br></br>
                    {book.Download? <a href={book.Download}>Doanload Link</a>: null}
                </Container>
            </React.Fragment>
        )
    }

}

const mapStateToProps = state => {
    return {
      currentBook: state.currentBook
    };
  };
  
  const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ getBook, restBook }, dispatch)
  });
  
  export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(BookDetails));