import React, { Component } from "react";
import styled from "styled-components";

const CategoryTitleBg = styled.div`
  width: 40%;
  background-color: black;
  margin-bottom: 2vh;

  @media screen and (max-width: 1080px) {
    width: 70%;
    background-color: black;
    margin-bottom: 2vh;
  }
`;

const CategoryTitle = styled.div`
  font-size: 3em;
  font-weight: 600;
  padding-inline-start: 1em;
  padding-block-end: 0.2em;
  margin-bottom: 8px;
  color: white;

  @media screen and (max-width: 1080px) {
    font-size: 2em;
    padding-inline-start: 0.3em;
  }
`;

class CategoryDiv extends Component {
  render() {
    return(
      <>
        <CategoryTitleBg>
          <CategoryTitle>{this.props.desc}</CategoryTitle>
        </CategoryTitleBg>
      </>
    );
  }

}

export default CategoryDiv