import React, { Component } from "react";
import styled from "styled-components";
import { MainContainer } from "./sharedStyle";
import JSON_DATA from "../Data2.json";

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

const ColumnTitle = styled.div`
  font-size: 2rem;
  margin-bottom: 30px;
`;

const TextHolder = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  margin-right: 50px;
`;

const TextHolderHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 200px;
`;

const HolderTitle = styled.span`
  font-weight: 600;
`;

const HolderDesc = styled.span`
  margin-left: 0px;
  margin-top: 5px;
`;

const BackBtn = styled.div``;

export default function Contents({ match, history }) {
  // JSON 파일을 만들어서 ContentsId랑 일치하는 녀석으로 불러오기
  const contentsId = match.params.contentsId;
  const textData = {};
  const val = JSON_DATA.map((item, idx) => {
    // JSON 오브젝트 나누기
    const [keys, entryValues] = Object.entries(item);

    keys[1].map( element => {
      if(element.id == contentsId) {
        textData[0] = element;
        return
      }
    })
  });
  const data = textData[0];
  console.log(data);

  // 내용에 따라서 달라지는 Component 구성
  return (
    <>
      <HeadContainer>
        <BackBtn onClick={() => history.goBack()}>뒤로</BackBtn>
        <div className="contents title">{data.title}</div>
      </HeadContainer>

      <MainContainer className="main-container">
        <div>
          {/* Abstract */}
          <ColumnTitle>Information</ColumnTitle>

          <TextHolder>
            <HolderTitle>개요</HolderTitle>
            <HolderDesc>{data.proj_head.abstract}</HolderDesc>
          </TextHolder>

          <TextHolderHorizontal>
            <TextHolder>
              <HolderTitle>기간</HolderTitle>
              <HolderDesc>{data.proj_head.period}</HolderDesc>
            </TextHolder>

            <TextHolder>
              <HolderTitle>참여 인원</HolderTitle>
              <HolderDesc>{data.proj_head.team}</HolderDesc>
            </TextHolder>
          </TextHolderHorizontal>

          <TextHolder>
            <HolderTitle>담당업무</HolderTitle>
            <HolderDesc>{data.proj_body.my_job}</HolderDesc>
          </TextHolder>
        </div>

        {/* Detail */}
        <ColumnTitle>Details</ColumnTitle>
        <TextHolder>
          <HolderTitle>사용 기술</HolderTitle>
          <div>
            {/* 사용한 기술에 따라 아이콘 분배 및 내용 보내주기 */}
            <span>아이콘</span>
            <span>내용</span>
          </div>
        </TextHolder>

        <TextHolder>
          <HolderTitle>작업 내용</HolderTitle>
          <HolderDesc>{data.proj_body.method}</HolderDesc>
        </TextHolder>

        {/* Result */}
        <ColumnTitle>Result</ColumnTitle>
        <TextHolder>
          <HolderTitle>결과</HolderTitle>
          <HolderDesc>{data.proj_result.earned}</HolderDesc>
        </TextHolder>
      </MainContainer>
    </>
  );
}
