import React, { Component } from "react";
import styled from "styled-components";
import { MainContainer } from "./sharedStyle";

const HeadContainer = styled.div`
  position: relative;
  height: 60vh;
  padding-top: 10vh;
  background: no-repeat center/100%;
  background-image: url(${(props) => props.url});
`;

HeadContainer.defaultProps = {
  url: null,
};

export default function Contents() {
  return (
    <>
      {/* <HeadContainer>
          <div className="contents title">콘텐츠 제목</div>
        </HeadContainer> */}

      <MainContainer className="main-container">
        <div className="intro-holder">
          <div className="intro-title">Information</div>

          <div className="holder-container">
            <span className="holder-title">개요</span>
            <span className="holder-desc">개요에 들어갈 내용</span>
          </div>

          <div id="horizontal-mul">
            <div className="holder-container">
              <span className="holder-title">기간</span>
              <span className="holder-desc">2016-09-12 ~ 2017-05-30</span>
            </div>

            <div className="holder-container">
              <span className="holder-title">참여 인원</span>
              <span className="holder-desc">5명</span>
            </div>
          </div>

          <div className="holder-container">
            <span className="holder-title">담당업무</span>
            <span className="holder-desc">잔소리</span>
          </div>
        </div>

        <div className="body-holder">
          <div className="body-title">Details</div>
          <div className="holder-container">
            <span className="holder-title">사용 기술</span>
            <div className="holder-desc">
              <span>아이콘</span>
              <span>내용</span>
            </div>
          </div>

          <div className="holder-container">
            <span className="holder-title">작업 내용</span>
            <span className="holder-desc">내용</span>
          </div>
        </div>
      </MainContainer>
    </>
  );
}
