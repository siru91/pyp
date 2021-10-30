/* 

콘텐츠 페이지

*/

import React from "react";
import { TextBlock } from "./sharedStyle";

export default function base(props) {
  const name = props.name;

  const coc16 = function () {
    return (
      <TextBlock>
        프로젝트의 목적이 '프로젝트의 설계부터 구현에 이르는 전체 프로세스를
        경험한 다학제적 융합인재 양성'이였기 때문에 큰 전공분야 구분없이 거의
        모든 일을 했다.
        <br></br>
        전체 내용 기획을 시작으로, 공간에 영상을 투사할 다수의 프로젝터 제어,
        UX를 고려한 인터페이스 구성 및 소스 제작, Unity3D를 이용한 환경 개발,
        테이블과 함께 사용될 풍속이나 조명 향기등을 조절하는 센서를 연결하고
        데이터를 주고받는 일을 했다.
      </TextBlock>
    );
  };

  const yng = function () {
    return <TextBlock>YNG에 대한 설명123123123123</TextBlock>;
  };

  switch (name) {
    case "coc2016":
      return coc16();

    case "yng":
      return yng();

    case "gutsy":
      return null;

    default:
      break;
  }
}
