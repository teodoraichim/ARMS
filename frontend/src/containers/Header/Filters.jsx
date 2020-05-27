import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setFilters, clearFilters } from "../../actions/bookActions";

export const FilterButton = styled.button`
background:none;
border:none;
cursor: pointer;
color: white;
font-size:15px;
position: absolute;
left:0;
top:30px;
font-weight: 600px;
`

export const RestyledFormGroup = styled(Form.Group)`

label{
    display: flex;
    justify-content: flex-start;
    font-size:12px;
    
}

input, select{
    border: none;
    border-radius: 2px;
    width:150px;
}
`
export class Filters extends Component {

    handleInputChange = (fieldName, fieldValue) => {
        this.props.setFilters(fieldName, fieldValue);
      };
    
      handleSubmit(event) {
        
      }
    render(){
        return (
        <React.Fragment>
            <Form>
                <Row>
                
                    <Col>
                        <RestyledFormGroup controlId="title">
                            <Form.Label>Title:</Form.Label> 
                            <Form.Control type="text"  defaultValue={this.props.filters.title} placeholder="Book's title"
                            onChange={e => this.handleInputChange("title", e.target.value)} />
                        </RestyledFormGroup>
                    </Col>
                    <Col>
                        <RestyledFormGroup>
                            <Form.Label>Author:</Form.Label>
                            <Form.Control type="text" placeholder="Author's name" defaultValue={this.props.filters.author}
                            onChange={e => this.handleInputChange("author", e.target.value)} />
                        </RestyledFormGroup>
                    </Col>
                    <Col>
                        <RestyledFormGroup>
                        <Form.Label>Cathegory:</Form.Label>
                            <Form.Control as="select" defaultValue={this.props.filters.cathegory}
                            onChange={e => this.handleInputChange("cathegory", e.target.value)} >
                                <option value="All">All</option>
                                <option value="2">2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                        </Form.Control>
                        </RestyledFormGroup>
                    </Col>
                    <Col xs={1}>
                        <FilterButton onClick={this.handleSubmit}>APPLY</FilterButton>
                    </Col>
                    <Col xs={1}>
                        <FilterButton onClick={() => this.props.clearFilters()}>CLEAR</FilterButton>
                    </Col>
                </Row>
            </Form>
        </React.Fragment>
        )
    }
    

}
const mapStateToProps = state => {
    return {
      filters: state.filters,
      
    };
  };
  
  const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ setFilters, clearFilters }, dispatch)
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Filters);
