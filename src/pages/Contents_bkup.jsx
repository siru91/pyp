import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { MainContainer } from "./sharedStyle";
import ImageGallery from "react-image-gallery";
import JSON_DATA from "../Data2.json";
import Header from "../components/Header";
import Items from "./Contents__Items";

import gal from "./Gallery.css";

const HeadContainer = styled.div`
  height: 100vh;
  padding-top: 10vh;
  overflow: hidden;

  @media screen and (max-width: 1080px) {
    height: 90vh;
  }
`;

const HeadContainerImg = styled.div`
  height: 100%;
  background: no-repeat center/cover;
  background-image: url(${(props) => process.env.PUBLIC_URL + props.imageUrl});
`;

const HeadContainerVid = styled.video`
  width: auto;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

const HeaderTextHolder = styled.div`
  position: absolute;
  width: auto;
  top: 25%;
  background-color: #262626;
  text-align: left;
  display: block;
  padding: 5vh 10vh 5vh 8vh;
  color: white;

  & > .title {
    font-size: 5rem;
    font-weight: 700;
    margin-bottom: 10vh;
    line-height: 6.5rem;

    @media screen and (max-width: 1080px) {
      font-size: 3rem;
      line-height: 3.5rem;
      top: 30%;
    }
  }

  & > .subtitle {
    font-size: 3rem;
    font-weight: 500;
  }

  & > .desc {
    font-size: 2rem;
    font-weight: 500;

    @media screen and (max-width: 1080px) {
      bottom: 0;
      margin-left: 0%;
    }
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

const HolderTitle = styled.span`
  font-weight: 600;
`;

const HolderDesc = styled.span`
  white-space: pre-line;
  margin-left: 0px;
  margin-top: 5px;
`;

const TextHolder = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2);
  gap: 5% 3%;
  margin-top: ${(props) => (props.first ? "0rem" : "10rem")};
  margin-bottom: 10rem;

  & > .title {
    display: flex;
    justify-content: space-between;
    font-size: 2rem;
    text-align: center;

    & > .text {
      transform: translate(0, -2.8%);
    }

    & > .bar_start {
      background-color: black;
      width: 5px;
      height: 1em;
      display: block;
    }
    & > .bar_end {
      background-color: null;
      width: 5px;
      height: 1em;
      display: block;
    }
  }

  & > .desc {
    grid-column-start: 2;
    grid-column-end: 4;
  }

  & > .items {
    max-width: 100%;
    border: black solid 1px;
    grid-column-start: 2;
    grid-column-end: 4;
  }
`;

const TechHolder = styled.div`
  z-index: 3;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  border-radius: 15px;

  padding: 5rem 0 7rem 0;
  margin-top: 10rem;
  margin-bottom: 12rem;
  margin-left: 5%;
  margin-right: 5%;

  background-color: #c7c7c740;
  backdrop-filter: blur(5px);
`;

const TechHolderTitle = styled.span`
  font-size: 1.6em;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
`;

const TechHolderDesc = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-left: 0px;
  margin-top: 5px;
`;

const TechContainer = styled.div`
  width: 20%;
  height: 10em;
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

  .tech-title {
    position: relative;
    text-align: center;
    top: 13%;
  }
`;

const BackBtn = styled.div`
  position: relative;
  top: 5%;
`;

// img tag for svg
const SvgImg = styled.object`
  position: absolute;

  top: ${(props) => props.top};
  left: ${(props) => props.left || null};
  right: ${(props) => props.right || null};
  width: 35%;
  filter: opacity(0.8);
`;

export default function Contents({ match, history }) {
  // JSON 파일을 만들어서 ContentsId랑 일치하는 오브젝트 불러오기
  const contentsId = match.params.contentsId;
  const [isScrolled, setScrollActive] = useState(false);
  const [backType, setBackType] = useState("img");
  var textData = {};
  var data = null;
  var imagesUrls = [];
  var videoUrls = [];

  window.scrollTo(0, 0);

  JSON_DATA.map((item) => {
    // JSON 오브젝트 나누기
    const [keys, entryValues] = Object.entries(item);
    keys[1].map((element) => {
      if (element.id == contentsId) {
        textData[0] = element;
        return;
      }
    });
  });
  //이미지 배열의 형태 변경
  data = textData[0];

  data.images.map((item) => {
    imagesUrls.push({ original: process.env.PUBLIC_URL + item });
    return;
  });

  data.videos.map((item) => {
    videoUrls.push(process.env.PUBLIC_URL + item);
    return;
  });

  useEffect(() => {
    setBackType(data.banner_type);
  });

  //Render
  return (
    <>
      <Header nav={"WORKS"} />
      <HeadContainer>
        {backType === "img" && (
          <HeadContainerImg
            imageUrl={data.link_banner}
            bannerType={data.banner_type}
          ></HeadContainerImg>
        )}
        {backType === "vid" && (
          <>
            <HeadContainerVid autoPlay muted loop bannerType={data.banner_type}>
              <source
                src={process.env.PUBLIC_URL + data.link_banner}
                type="video/mp4"
              ></source>
            </HeadContainerVid>
          </>
        )}
        <BackBtn onClick={() => history.goBack()}>뒤로</BackBtn>
        <HeaderTextHolder>
          <div className="title">{data.title}</div>
          <div className="subtitle">{data.subtitle}</div>
          <div className="desc">{data.period}</div>
        </HeaderTextHolder>
      </HeadContainer>

      <MainContainer
        className={isScrolled ? "scrolled" : ""}
        paddingTop="20rem"
      >
        <SvgImg
          type="image/svg+xml"
          data={process.env.PUBLIC_URL + "/img/svg/aboutCircle.svg"}
          top="230%"
          left="-20%"
        />
        {/* <SvgImg
          className="svgPoly"
          type="image/svg+xml"
          data={process.env.PUBLIC_URL + "/img/svg/poly_01.svg"}
          top={"250%"}
          right={"-20%"}
        /> */}

        <div className="subContainer">
          <TextHolder first={true}>
            <div className="title">
              <div className="bar_start" />
              <div className="text">프로젝트 정보</div>
              <div className="bar_end" />
            </div>
            <div className="desc">
              <Items name={data.id} />
            </div>
            <video controls muted className="items" src={videoUrls[0]} />
          </TextHolder>

          <ImageGallery
            style={gal}
            items={imagesUrls}
            showFullscreenButton={false}
            showPlayButton={false}
            showBullets={true}
          />

          {/* <TextHolder>
          <HolderTitle>프로젝트에 사용한 기술</HolderTitle>
            <HolderDesc>
              <ul>
                {data.method.map((item, key) => {
                  return <li key={key}>{item}</li>;
                })}
              </ul>
            </HolderDesc>
          </TextHolder> */}
        </div>
        <TechHolder>
          <TechHolderTitle>담당업무 / 기여도</TechHolderTitle>
          <TechHolderDesc>
            {data.my_job.map((item, idx) => {
              const [key, val] = Object.entries(item);
              // console.log(key);
              // console.log(item.key);
              return (
                <TechContainer key={idx}>
                  <div className="tech-tmb"></div>
                  <div className="tech-title">{key[0]}</div>
                  {/* <div className="tech-percent">{key[1]}</div> */}
                </TechContainer>
              );
            })}
          </TechHolderDesc>
        </TechHolder>
        <div className="subContainer">
          {/* Result */}
          <ColumnTitle>결과</ColumnTitle>
          <TextHolder>
            <HolderTitle>자체 평가</HolderTitle>
            <HolderDesc>{data.earned}</HolderDesc>
          </TextHolder>
        </div>
      </MainContainer>
    </>
  );
}
