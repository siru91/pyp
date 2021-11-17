import React from "react";
import styled from "styled-components";

export const Intro__Item = styled.div``;

export const IntroItemHolder = styled.div`
  position: relative;
  width: auto;
  max-width: 45rem;
  padding-top: 15rem;
  padding-bottom: 15rem;
  margin-left: auto;
  margin-right: auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  column-gap: 2rem;
  row-gap: 3rem;

  @media screen and (max-width: 1080px) {
    margin-left: 3%;
    margin-right: 3%;
  }
  & > .bg {
    width: 200%;
    height: 70%;
    min-width: 80%;
    box-sizing: content-box;
    position: absolute;
    left: -90%;
    top: 20%;
    border: #262626 solid 2.5px;
    z-index: -1;

    @media screen and (max-width: 1280px) {
      min-width: 98%;
    }
  }

  & > .title {
    grid-column-start: 1;
    grid-column-end: 4;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;

    @media screen and (max-width: 1080px) {
      font-size: 2rem;
    }
  }
  ${Intro__Item} {
    & > .head {
      font-weight: 600;
      font-size: 1.3rem;
    }
    & > .bar {
      margin: 0.7rem auto;
      width: 100%;
      height: 4px;
      background-color: #000000;
    }
    & > .desc {
      color: #666666;
      font-weight: 400;

      font-size: 1.3rem;
    }
  }
`;

export default function IntroHolder(props) {
  return (
    <IntroItemHolder>
      <div className="bg" />
      <div className="title">{props.title}</div>
      <Intro__Item>
        <div className="head">주관</div>
        <div className="bar"></div>
        <div className="desc">{props.client}</div>
      </Intro__Item>
      <Intro__Item>
        <div className="head">작업 기간</div>
        <div className="bar"></div>
        <div className="desc">{props.period}</div>
      </Intro__Item>
      <Intro__Item>
        <div className="head">작업 분류</div>
        <div className="bar"></div>
        <div className="desc">{props.subtitle}</div>
      </Intro__Item>
      <Intro__Item>
        <div className="head">인원 구성</div>
        <div className="bar"></div>
        <div className="desc">{props.team}</div>
      </Intro__Item>
      <Intro__Item>
        <div className="head">결과물</div>
        <div className="bar"></div>
        <div className="desc">{props.results}</div>
      </Intro__Item>
    </IntroItemHolder>
  );
}
