import React, { Component } from "react";
import styled from "styled-components";
import Book from './Book';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loadBooks } from "../../actions/bookActions";

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

export class Booklist extends Component {

    componentDidMount() {
        this.props.loadBooks(this.props.currentPage, this.props.filters);
    }
    componentWillUpdate(nextProps) {
    if (this.props.currentPage !== nextProps.currentPage || this.props.error !== nextProps.error)
      this.props.loadBooks(
        nextProps.currentPage,
        this.props.filters
      );
  }
    render() {
        const books = this.props.booksList;
        return (
            <List>
                { books.map(book => <Book book={book} key={book.id} />)}
            </List>
        )
    }
}

const mapStateToProps = state => {
    return {
      booksList: state.booksList,
      filters: state.filters,
      currentPage: state.currentPage
    };
  };
  
  const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ loadBooks }, dispatch)
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Booklist);