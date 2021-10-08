import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ItemCells = styled(Link)`
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
    font-weight: 500;
  }

  & > strong {
    font-size: 1.7em;
    font-weight: 700;
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

export default function ItemCell(props) {

  return (
    <ItemCells to={`${props.path}/${props.alt}`}>
      <div>
        <ThumbImg alt={props.alt} src={props.thumbImg} />
      </div>
      <strong>{props.title}</strong> <br />
      <em>{props.category}</em>
    </ItemCells>
  );
}
