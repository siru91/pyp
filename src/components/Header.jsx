import React, { useState, useEffect } from "react";
import styled from "styled-components";

const HeaderHolder = styled.div`
  position: fixed;
  height: 3rem;
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
  backdrop-filter: blur(5px);

  & > .headerTitle {
    fill: white;
    height: 100%;
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

    & > .headerTitle {
      height: 80%;
    }
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
          <svg
            className="headerTitle"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 20 125 80"
          >
            <rect x="5.5" y="33.17" className="st0" width="15" height="60" />
            <rect x="105.5" y="33.17" className="st0" width="15" height="60" />
            <circle className="st0" cx="42.06" cy="52.23" r="19.06" />
            <polygon
              className="st0"
              points="78.4,34.07 65.45,34.07 65.44,34.08 65.44,47.05 89.68,71.29 102.64,71.29 102.65,71.28 102.65,58.32 
	"
            />
          </svg>
          <div className="headerText">{props.nav}</div>
        </HeaderHolder>
      ) : null}
    </>
  );
}
