import React, { useState, useEffect } from "react";
import styled from "styled-components";

const HeaderHolder = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: black;
  color: white;
  box-sizing: content-box;
  display: flex;
  justify-content: space-between;

  font-size: 2em;
  padding: 3vh 0 3vh 0;

  z-index: 5;
  transition: 0.2s;

  & > .headerTitle {
    max-width: 80%;
    padding-left: 5%;
    display: inline-block;
  }

  & > .headerText {
    padding-right: 5%;
    display: inline-block;
  }

  @media screen and (max-width: 1080px) {
    & > .headerText {
      max-width: 80%;
      padding-left: 3%;
    }
  }

  &.isScrolled {
    font-size: 1.7em;
    padding: 1.5vh 1vh;
    font-weight: 700;
    background-color: #000000b0;
  }
`;

export default function Header(props) {
  const [active, setActive] = useState(true);
  const [isScrolled, setScrollActive] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 50) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  };

  useEffect(() => {
    setActive(true);
    window.addEventListener("scroll", onScroll);

    return function cleanup() {
      setActive(false);
    };
  });

  return (
    <>
      {active ? (
        <HeaderHolder className={isScrolled ? "isScrolled" : ""}>
          <div className="headerTitle">Pyeong</div>
          <div className="headerText">{props.nav}</div>
        </HeaderHolder>
      ) : null}
    </>
  );
}
