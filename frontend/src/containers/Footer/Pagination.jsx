import React from "react";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changePage } from "../../actions/bookActions";


export const ChangePage = styled.span`
  color: rgb(200,200,200);
  font-size: 18px;
  line-height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items:center;
  color: white;
  margin: 10px;
  
  button {
    border: 0px;
    background: none;
    color: rgb(200,200,200);
    cursor: pointer;
  }
  button:hover {
    color: white;
  }
  button:focus {
    outline: none;
  }
  button#next,
  button#back {
    background:none;
    margin-top:2px;
  }
  a,
  p {
    color: rgb(200,200,200);
    text-decoration: none;
    margin-left: 3px;
    margin-right: 3px;
  }
  div {
    margin-top: 7px;
  }
  
  button.active {
    color: white;
    font-weight: 600px;
  }
`;

export class Pagination extends React.Component {
  getBackButton = currentPage => {
    if (currentPage > 1)
      return (
        <button
          id="back"
          onClick = {() => this.props.changePage(currentPage - 1)}
          
        >
         &#60;
        </button>
      );
  };
  getNextButton = (currentPage, numberPages) => {
    if (currentPage < numberPages)
      return (
        <button
          id="next"
          onClick = {() => this.props.changePage(currentPage + 1)}
        >
         &#62;
        </button>
      );
  };
  getFirstElipses = currentPage => {
    if (currentPage > 3) return <a>...</a>;
  };
  getLastElipses = (currentPage, numberPages) => {
    if (currentPage < numberPages - 2) return <a>...</a>;
  };
  getPages = (currentPage, numberPages) => {
    let result = [];
    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
      console.log(i);
      if (i >= 1 && i <= numberPages) {
        if (i === currentPage)
          result.push(
            <button key={i}
              onClick = {() => this.props.changePage(i)}
              className="active"
            >
              {i}
            </button>
          );
        else
          result.push(
            <button key={i}
            onClick = {() => this.props.changePage(i)}
            >
              {i}
            </button>
          );
      }
    }
    return result;
  };

  render() {
    const currentPage = this.props.currentPage;
    const numberPages = this.props.numberPages;


    return (
      <ChangePage>
        {this.getBackButton(currentPage)}
        <div>
          {this.getFirstElipses(currentPage)}
          {this.getPages(currentPage, numberPages)}
          {this.getLastElipses(currentPage, numberPages)}
        </div>
        {this.getNextButton(currentPage, numberPages)}
      </ChangePage>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPage: state.currentPage,
    numberPages: state.numberPages,
    
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ changePage }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);




