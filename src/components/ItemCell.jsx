import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ItemCells = styled(Link)`
  position: relative;
  float: left;
  width: 50%;
  display: block;
  margin-bottom: 8vh;
  padding-left: 1.5%;
  padding-right: 1.5%;
  box-sizing: border-box;
  filter: grayscale(100%);
  cursor: pointer;
  overflow: hidden;

  transition: 0.5s;

  & > strong {
    font-size: 2.3rem;
    font-weight: 700;
  }

  & > em {
    font-size: 1.3rem;
    font-weight: 500;
  }

  &:hover {
    filter: grayscale(0%);
  }

  & > .panel {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: black;
  }

  @media screen and (max-width: 1080px) {
    width: 100%;
    padding-left: 3%;
    padding-right: 3%;

    & > strong {
      font-size: 2rem;
    }
  }
`;

const ThumbImg = styled.img`
  border: 2px solid black;
  width: 100%;
`;

export default function ItemCell(props) {
  return (
    <ItemCells to={`${props.path}/${props.alt}`}>
      <ThumbImg alt={props.alt} src={props.thumbImg} />
      <strong>{props.title}</strong> <br />
      <em>{props.subtitle}</em>
    </ItemCells>
  );
}
