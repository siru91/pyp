import React from "react";
import styled from "styled-components";

const Chart = styled.svg`
  height: 50vh;
  z-index: -1;

  &.techHolder__chart {
    fill: none;
    stroke: #4cc790;
    stroke-linecap: round;
    stroke-width: 1.8;
    stroke-dasharray: ${(props) => props.percent || 0} 100;
    stroke-dashoffset: -200;
  }

  & > .techHolder__chartbase {
    fill: none;
    stroke: #ddd;
    stroke-width: 1.8;
    stroke-dasharray: 0;
  }
`;

const ChartDesc = styled.div`
  width: 100%;
  position: absolute;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default function ContributionChart(props) {
  return (
    <div
      className="ChartContainer"
      style={{ margin: "auto", position: "relative" }}
    >
      <Chart
        className="techHolder__chart"
        percent={props.percent}
        viewBox="0 0 36 36"
      >
        <path
          className="techHolder__chartbase"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </Chart>
      <ChartDesc className="techHolder__desc">
        <strong>MY JOB</strong>
        <br></br>
        유니티를 이용한 실시간 가상 환경 구성
        <br></br>
        외부 데이터 통합
        <br></br>
        <br></br>
        <strong>WITH TEAM</strong>
        <br></br>
        외부 센서 하드웨어와 데이터 통신
        <br></br>
        키넥트 동작 인식
        <br></br>
        표정 인식
      </ChartDesc>
    </div>
  );
}
