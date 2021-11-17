import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { ss } from "..";
import JSON_DATA from "../../Data2.json";
// import JSON_DATA from "../../Data3.json";

import Header from "../../components/Header";
import IntroHolder from "../../components/IntroHolder";
import ContributionChart from "../../components/ContributionChart";

export default function Coc2016({ match, history }) {
  // JSON 파일을 만들어서 ContentsId랑 일치하는 오브젝트 불러오기
  const contentsId = match.params.contentsId;
  const [isScrolled, setScrollActive] = useState(false);
  const [backType, setBackType] = useState("img");
  var textData = {};
  var data = null;
  var imagesUrls = [];
  var imagesObjectUrls = [];
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
    imagesUrls.push(process.env.PUBLIC_URL + item);
    imagesObjectUrls.push({ original: process.env.PUBLIC_URL + item });
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
      <ss.HeadContainer>
        <ss.HeadContainerVid autoPlay muted loop bannerType={data.banner_type}>
          <source
            src={process.env.PUBLIC_URL + data.link_banner}
            type="video/mp4"
          ></source>
        </ss.HeadContainerVid>
        <ss.BackBtn onClick={() => history.goBack()}>뒤로</ss.BackBtn>
      </ss.HeadContainer>

      <IntroHolder
        title={data.title}
        client={data.client}
        period={data.period}
        subtitle={data.subtitle}
        team={data.team}
        results={data.results.map((item) => {
          return (
            <>
              {item}
              <br></br>
            </>
          );
        })}
      />

      <ss.MainContainer className={isScrolled ? "scrolled" : ""}>
        {/* SVG 이미지 로드 */}
        <ss.SvgImg
          type="image/svg+xml"
          data={process.env.PUBLIC_URL + "/img/svg/aboutCircle.svg"}
          top="200%"
          left="-20%"
        />

        <div className="subContainer">
          <ss.TextHolder first={true}>
            <div className="title">
              <div className="bar_start" />
              <div className="text">다양한 경험이 가능했던 융합 프로젝트</div>
              <div className="bar_end" />
            </div>
            <div className="desc">
              <div>
                창의+융합형 인재 육성을 위해 디자인, 예술, ICT등 다학계 분야
                연구원들이 모인 개방형 캠퍼스 프로젝트입니다.
                <br></br>
                Unity3D를 이용하여 가상 환경을 생성하여 빔프로젝터를 이용해
                공간에 투사한 뒤, 가상 환경을 제어할 수 있는 테이블을
                제작하였습니다.
                <br></br>
                가상 환경은 외부 데이터를 종합적으로 이용해 공간을 변경해줍니다.
                <br></br>
                사용자의 현재 감성을 담은 데이터로 환경을 감성 상태에 알맞게
                변경해줍니다.
                <br></br>
                <br></br>
                '프로젝트의 설계부터 구현에 이르는 다학제적 융합인재 양성'의
                목적 아래 큰 전공분야의 구분없이 다양한 작업을 했습니다.
                <br></br>
                전체 내용 기획을 시작으로, 공간에 영상을 투사할 다수의 프로젝터
                제어, UX를 고려한 인터페이스 구성 및 소스 제작, Unity3D를 이용한
                환경 개발, 테이블과 함께 사용한 외부 하드웨어들에서 들어오는
                데이터를 이용한 환경 제어 등을 맡아서 진행하였습니다.
              </div>
            </div>
            <video
              style={{ pointerEvents: "none" }}
              autoPlay
              muted
              loop
              className="items"
              src={videoUrls[0]}
            />
          </ss.TextHolder>
          {/* <ImageGallery
            style={gallStyle}
            items={imagesUrls}
            showFullscreenButton={false}
            showPlayButton={false}
            showBullets={true}
          /> */}
        </div>
        <div className="subContainer">
          <ss.TextHolder>
            <div className="title">
              <div className="bar_start" />
              <div className="text">Unity3D를 이용한 실시간 환경 구성</div>
              <div className="bar_end" />
            </div>
            <div className="desc">
              <div>
                실시간으로 변화하는 환경을 구성하기 위해 Unity3D를
                이용하였습니다.
                <br></br>
                환경은 사용자의 감성 데이터와 표정, 동작등을 인식하고 종합하여
                감성 증강을 위해 변화합니다.
              </div>
            </div>
          </ss.TextHolder>
        </div>
        <ss.ImageHolder>
          <ss.Holder__image
            src={imagesUrls[0]}
            className="holder__image"
            alt="img01"
            columnStart={1}
            columnEnd={4}
            objPos="0% 0"
          />
          <ss.Holder__image
            src={imagesUrls[1]}
            className="holder__image"
            alt="img02"
            columnStart={4}
            columnEnd={7}
            objPos="90% 0"
          />
          <ss.Holder__video
            autoPlay
            muted
            loop
            src={videoUrls[0]}
            className="holder__video"
          />
        </ss.ImageHolder>

        <div className="subContainer">
          <ss.TextHolder>
            <div className="title">
              <div className="bar_start" />
              <div className="text">터치 테이블 형태의 사용자 인터페이스</div>
              <div className="bar_end" />
            </div>
            <div className="desc">
              <div>
                대형 테이블에 터치 기능을 구현했기 때문에, 사용자의 손이 닿는
                테이블 하단에 메인 인터페이스를 구성했습니다. 테이블 상단은 현재
                감성상태 등을 확인할 수 있는 대시보드 형태로 구성했습니다.
              </div>
            </div>
          </ss.TextHolder>
        </div>

        <ss.ImageHolder>
          <ss.Holder__image
            src={imagesUrls[2]}
            className="holder__image"
            alt="img01"
            columnStart={1}
            columnEnd={3}
            objPos="0% 0"
          />
          <ss.Holder__image
            src={imagesUrls[3]}
            className="holder__image"
            alt="img02"
            columnStart={3}
            columnEnd={7}
            objPos="90% 0"
          />
        </ss.ImageHolder>

        <div className="subContainer">
          <ss.TextHolder>
            <div className="title">
              <div className="bar_start" />
              <div className="text">프로젝트 관련 결과물 제작</div>
              <div className="bar_end" />
            </div>
            <div className="desc">
              <div>아웃풋즈</div>
            </div>
          </ss.TextHolder>
        </div>

        <ss.ImageHolder>
          <ss.Holder__image
            src={imagesUrls[4]}
            className="holder__image"
            alt="img02"
            objPos="90% 0"
          />
        </ss.ImageHolder>

        <ss.TechContainer>
          <ss.TechHolder>
            <div className="techHolder__title">담당업무 / 기여도</div>
            <ContributionChart className="techHolder__chart" percent={70} />
            <ContributionChart className="techHolder__chart" percent={80} />
          </ss.TechHolder>
        </ss.TechContainer>

        {/* <div className="subContainer">
          <ss.ColumnTitle>결과</ss.ColumnTitle>
          <ss.TextHolder>
            <ss.HolderTitle>자체 평가</ss.HolderTitle>
            <ss.HolderDesc>{data.earned}</ss.HolderDesc>
          </ss.TextHolder>
        </div> */}
      </ss.MainContainer>
    </>
  );
}
