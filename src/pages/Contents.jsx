import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MainContainer } from "./sharedStyle";
import JSON_DATA from "../Data2.json";
import Header from "../components/Header";
import Items from "./Items";

const HeadContainer = styled.div`
  height: 120vh;
  padding-top: 10vh;
  background: no-repeat center/cover;
  background-image: url(${(props) => process.env.PUBLIC_URL + props.imageUrl});

  @media screen and (max-width: 1080px) {
    height: 90vh;
  }
`;

const HeaderTitle = styled.div`
  position: absolute;
  width: 100%;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  display: inline-block;
  text-align: center;
  font-size: 7rem;
  font-weight: 600;
  color: 'secondary';
  background-color: 'background';
  white-space: pre-line;
  line-height: 7.5rem;

  @media screen and (max-width: 1080px) {
    font-size: 3rem;
    line-height: 3.5rem;
    top: 30%;
  }
`;

const HeaderDesc = styled.div`
  position: absolute;
  bottom: -25%;
  box-sizing: content-box;
  margin-left: 15%;
  height: 200px;
  font-size: 2rem;
  color: white;
  border: blue 5px solid;

  @media screen and (max-width: 1080px) {
    bottom: 0;
    margin-left: 0%;
  }
`;

const ColumnTitle = styled.div`
  position: relative;
  left: -1%;
  font-size: 2em;
  display: inline-block;
  width: auto;
  padding: 0 1em 0 0.4em;
  height: 2em;
  line-height: 1.8em;
  margin-bottom: 1em;
  margin-top: ${(props) => (props.first ? "0em" : "4em")};
  background-color: black;
  color: white;
`;

const TextHolder = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  margin-right: 50px;
`;

const TextHolderHorizontal = styled.div`
  display: flex;
  margin-right: 100px;
`;

const HolderTitle = styled.span`
  font-weight: 600;
`;

const HolderDesc = styled.span`
  white-space: pre-line;
  margin-left: 0px;
  margin-top: 5px;
`;

const HolderDescHorizontal = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin-left: 0px;
  margin-top: 5px;
`;

const TechContainer = styled.div`
  width: 30%;
  height: 12em;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: 15px;

  .tech-tmb {
    position: relative;
    top: 10%;
    left: 50%;
    transform: translate(-50%);
    width: 5em;
    height: 5em;
    background-color: #757575;
    border-radius: 5%;
  }

  .tech-desc {
  }
`;

const BackBtn = styled.div`
  position: relative;
  top: 5%;
`;

export default function Contents({ match, history }) {
  // JSON 파일을 만들어서 ContentsId랑 일치하는 오브젝트 불러오기
  const contentsId = match.params.contentsId;
  const [isScrolled, setScrollActive] = useState(false);
  const textData = {};

  // const onScroll = () => {
  //   if (window.scrollY > 500) {
  //     setScrollActive(true);
  //   } else {
  //     setScrollActive(false);
  //   }
  // };

  // useEffect(()=> {
  //   window.addEventListener("scroll", onScroll);
  // });

  JSON_DATA.map((item, idx) => {
    // JSON 오브젝트 나누기
    const [keys, entryValues] = Object.entries(item);

    keys[1].map((element) => {
      if (element.id == contentsId) {
        textData[0] = element;
        return;
      }
    });
  });
  const data = textData[0];

  // 카테고리? 혹은 다른 기준에 따라서 달라지는 Component 구성
  return (
    <>
      <Header nav={"works"} />

      <HeadContainer imageUrl={data.link_banner}>
        <BackBtn onClick={() => history.goBack()}>뒤로</BackBtn>
        <HeaderTitle>{data.title}</HeaderTitle>
        <HeaderDesc>{data.proj_head.period} {data.proj_head.team}</HeaderDesc>
      </HeadContainer>

      <MainContainer className={isScrolled ? "scrolled" : ""} paddingTop="5em">

        <TextHolder>
          <HolderDesc>{data.proj_head.abstract}</HolderDesc>
        </TextHolder>

        <TextHolder>
          <HolderTitle>담당업무 / 기여도</HolderTitle>
          <HolderDescHorizontal>
            {data.proj_head.my_job.map((item, idx) => {
              const [key, val] = Object.entries(item);
              // console.log(key);
              // console.log(item.key);
              return (
                <TechContainer key={idx}>
                  <div className="tech-tmb"></div>
                  <div className="tech-title">{key[0]}</div>
                  <div className="tech-percent">{key[1]}</div>
                </TechContainer>
              );
            })}
          </HolderDescHorizontal>
        </TextHolder>

        {/* Detail */}
        <ColumnTitle>세부 내용</ColumnTitle>
        <TextHolder>
          <HolderTitle>프로젝트에 사용한 기술</HolderTitle>
          <HolderDesc>
            <ul>
              {data.proj_body.usage.map((item, key) => {
                return <li key={key}>{item}</li>;
              })}
            </ul>
          </HolderDesc>
        </TextHolder>

        <TextHolder>
          <Items name={data.id}></Items>
        </TextHolder>

        {/* Result */}
        <ColumnTitle>결과</ColumnTitle>
        <TextHolder>
          <HolderTitle>자체 평가</HolderTitle>
          <HolderDesc>{data.proj_result.earned}</HolderDesc>
        </TextHolder>
      </MainContainer>
    </>
  );
}
