/* 

콘텐츠 페이지

*/

import React from "react";

export default function base(props) {
  const name = props.name;

  const coc16 = function () {
    return (
      <div>
        한국전파진흥원 주관, 창의+융합형 인재 육성을 위해 디자인, 예술, ICT등
        <br></br>
        다학계 분야 연구원들이 모인 개방형 캠퍼스 프로젝트입니다.
        <br></br>
        공간에 빔을 투사하여 가상 환경을 생성하고 환경을 제어할 수 있는 테이블을
        제작하였습니다.
        <br></br>
        유니티를 이용하여 가상 환경을 구성하였고, 유니티는 실시간으로 외부
        센서의 데이터를 이용해 공간을 변경해줍니다.
        <br></br>
        사용자의 현재 감성을 담은 현재 데이터를 측정하여 환경을 감성 상태에
        알맞게 변경해줍니다.
        <br></br>
        <br></br>
        '프로젝트의 설계부터 구현에 이르는 다학제적 융합인재 양성'의 목적 아래
        큰 전공분야의 구분없이 거의 모든 일을 했습니다.
        <br></br>
        전체 내용 기획을 시작으로, 공간에 영상을 투사할 다수의 프로젝터 제어,
        UX를 고려한 인터페이스 구성 및 소스 제작, Unity3D를 이용한 환경 개발,
        테이블과 함께 사용한 외부 하드웨어들에서 들어오는 데이터를 이용한 환경
        제어 등을 맡아서 진행하였습니다.
      </div>
    );
  };

  const yng = function () {
    return (
      <div>
        감성과학기술센터에서 제작한 시스템에 GUI를 구현한 작업.
        <br></br>
        사용자에게 주관평가, 표정짓기, 제시된 표정 맞추기 등을 수행하게 하며 그
        때의 표정과 심박수를 측정하여 각 항목들을 점수로 환산, 반환한다.
        '연애능력고사'의 이름에 맞게 사랑스러운 분위기를 요청받았다. 분홍 톤을
        주색으로 설정하여 진행했다. 내부 요소들은 부드러운 느낌을 주기 위해 둥근
        모서리가 적용된 사각형으로 제작했다. 사용자가 수행할 작업에 대한
        튜토리얼이 필요했는데, 벡터 애니메이션을 이용해 제작했다.
        <br></br>
        XML을 이용하여 구현했다. 당시 XML에 대해서 지식이 거의 없었는데, XML의
        우수한 사용성 덕분에 대부분의 구현을 비교적 쉽게 해결할 수 있었다.
      </div>
    );
  };

  const gutsy = function () {
    return (
      <div>
        건강한 장을 위한,, 미완성 프로젝트
        <br></br>
      </div>
    );
  };

  switch (name) {
    case "coc2016":
      return coc16();

    case "yng":
      return yng();

    case "gutsy":
      return gutsy();

    case "doh":
      return null;

    case "jini":
      return null;

    case "viaf2021":
      return null;

    default:
      break;
  }
}
