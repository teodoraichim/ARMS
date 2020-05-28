import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setFilters, clearFilters, getCategories, loadBooks } from "../../actions/bookActions";

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

input, select, number{
    border: none;
    border-radius: 2px;
    width:150px;
}
`
export class Filters extends Component {


    constructor(props) {
        super(props);
    
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    handleInputChange = (fieldName, fieldValue) => {
        this.props.setFilters(fieldName, fieldValue);
        console.log(this.props.filters)
      };
    
      handleSubmit(event) {
        this.props.loadBooks(1, this.props.filters);
      }

      componentDidMount() {
        this.props.getCategories();
        
      }
    render(){
        const categories = this.props.categories;
        return (
        <React.Fragment>
            <Form style={{width:"53%"}}>
                <Row style={{width:"100%"}}>
                
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
                                {categories.map(categ => <option key={categ} value={categ}>{categ}</option>)}
                        </Form.Control>
                        </RestyledFormGroup>
                    </Col>
                    <Col>
                        <RestyledFormGroup>
                        <Form.Label>Year:</Form.Label>
                            <Form.Control type="number" defaultValue={this.props.filters.year}
                            onChange={e => this.handleInputChange("year", e.target.value)} >
                        </Form.Control>
                        </RestyledFormGroup>
                    </Col>
                    <Col xs={1}>
                        <FilterButton onClick={this.handleSubmit}>APPLY</FilterButton>
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
      categories: state.categories
    };
  };
  
  const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ setFilters, clearFilters, getCategories, loadBooks }, dispatch)
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Filters);
