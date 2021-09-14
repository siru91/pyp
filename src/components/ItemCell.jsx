import React, { Component } from "react";
import styled from "styled-components";

const ItemCells = styled.a`
  position: relative;
  float: left;
  width: 50%;
  display: block;
  margin-bottom: 3vh;
  padding-left: 1.5%;
  padding-right: 1.5%;
  word-wrap: break-word;
  box-sizing: border-box;
  filter: grayscale(100%);
  background-color: white;
  cursor: pointer;

  transition: 0.5s;

  & > em {
    font-size: 1.1em;
  }

  & > strong {
    font-size: 1.7em;
    font-weight: 900;
  }

  &:hover {
    filter: grayscale(0%);
  }

  @media screen and (max-width: 1080px) {
    width: 100%;
    padding-left: 3%;
    padding-right: 3%;
  }
`;

const ThumbImg = styled.img`
  border: 2px solid black;
  width: 100%;
`;


class ItemCell extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <>
        <ItemCells onClick={() => console.log("clicked!")}>
          <div>
            <ThumbImg alt={this.props.alt} src={this.props.thumbImg} />
          </div>
          <strong>{this.props.title}</strong> <br />
          <em>{this.props.category}</em>
        </ItemCells>
      </>
    );
  }
}

export default ItemCell;
