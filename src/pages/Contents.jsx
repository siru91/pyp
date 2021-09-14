import React, { Component } from "react";
import styled from "styled-components";
import { MainContainer } from "./sharedStyle";

const HeadContainer = styled.div`
  height: 60vh;
  padding-top: 10vh;
  background: no-repeat center/100%;
  background-image: url(${(props) => props.url});

  position: relative;
`;

HeadContainer.defaultProps = {
  url: null,
};

class Contents extends Component {
  render() {
    return (
      <>
        <HeadContainer>
          <div class="contents title">콘텐츠 제목</div>
        </HeadContainer>

        <MainContainer class="main-container">
          <div class="intro-holder">
            <div class="intro-title">Information</div>

            <div class="holder-container">
              <span class="holder-title">개요</span>
              <span class="holder-desc">개요에 들어갈 내용</span>
            </div>

            <div id="horizontal-mul">
              <div class="holder-container">
                <span class="holder-title">기간</span>
                <span class="holder-desc">2016-09-12 ~ 2017-05-30</span>
              </div>

              <div class="holder-container">
                <span class="holder-title">참여 인원</span>
                <span class="holder-desc">5명</span>
              </div>
            </div>

            <div class="holder-container">
              <span class="holder-title">담당업무</span>
              <span class="holder-desc">잔소리</span>
            </div>
          </div>

          <div class="body-holder">
            <div class="body-title">Details</div>
            <div class="holder-container">
              <span class="holder-title">사용 기술</span>
              <div class="holder-desc">
                <span>아이콘</span>
                <span>내용</span>
              </div>
            </div>

            <div class="holder-container">
              <span class="holder-title">작업 내용</span>
              <span class="holder-desc">내용</span>
            </div>
          </div>
        </MainContainer>
      </>
    );
  }
}

export default Contents;
