import React, { Component } from "react";
import "./About.css";
import { motion } from "framer-motion";

class About extends Component {
  render() {
    console.log("about page rendered");

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{duration: 0.5}}
      >
        <div className="a main-container">
          <div className="a container">
            <div id="intro-container" data-aos="fade-in" data-aos-delay="100">
              <svg
                className="img"
                viewBox="0 0 240 120"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle className="circle01" cx="60" cy="60" r="50" />
                <circle className="circle02" cx="180" cy="60" r="50" />
              </svg>

              <div className="text-holder" data-aos="fade-in">
                <div className="text 01">저는 디자이너입니다.</div>
                <div
                  className="text 02"
                  data-aos="fade-in"
                  data-aos-delay="1500"
                >
                  그리고 엔지니어입니다.
                </div>
              </div>
            </div>

            <div data-aos="fade-in" data-aos-delay="300">
              <strong>어떻게 그래?</strong>
              <br></br>
              학부로 시각디자인을, 석사로 감성공학을 전공했습니다.
              <br></br>
              디자인을 배우면서 인터랙티브 디자인, 미디어아트 등에 관심을 갖고
              코딩을 시작했습니다.
              <br></br>
            </div>
            <div data-aos="fade-in" data-aos-delay="300">
              <strong>데이터 기반 디자인을 지향</strong>
              <br></br>
              UI/UX에 관심이 많으며 디자이너 직관을 넘어서 데이터에 기반한
              플로우를 지향합니다.
              <br></br>
              사용자의 행태를 분석하거나 개선하는 것을 염두에 두며 작업하고
              있습니다.
              <br></br>
              GUI 제작을 위한 그래픽 툴을, UX 구현을 위한 프로토타이핑 툴을
              이용해 왔습니다.
            </div>

            <div data-aos="fade-in" data-aos-delay="300">
              <strong>목표는 프론트엔드 개발자</strong>
              <br></br>
              웹/앱에 UI를 구현하기 위한 HTML, CSS, XML 등을 사용합니다.
              <br></br>
              프론트엔드 개발까지 넘보고 있기 때문에 Kotlin, javascript, Swift를
              학습했었고, 발전시켜나가는 중입니다.
              <br></br>
              소프트웨어의 성능과 최적화에 많은 관심을 갖고 있습니다.
              <br></br>
              시스템 생태계를 이해하여 궁극적으로 효율적 디자인을 만드는 것이
              목표입니다.
            </div>

            <div data-aos="fade-in" data-aos-delay="300">
              <strong>배우기 너무좋아 배우기만 하고싶어</strong>
              <br></br>
              새로운 기술에 깨어있으려 노력하며 배움에 거부감이 적다고
              자부합니다.
              <br></br>
              머신러닝, 딥러닝을 배우고 활용해보기 위해 Python을 사용했습니다.
              <br></br>
            </div>

            <div data-aos="fade-in" data-aos-delay="300"></div>
          </div>

          <div
            className="horizontal-divider"
            data-aos="fade-in"
            data-aos-delay="300"
          ></div>

          <div className="container">
            <button
              className="collapsible"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              자세한 정보
            </button>
            <div id="coll" className="coll-contents">
              2010-2016 충북대학교 시각디자인과 졸업<br></br>
              2017-2019 상명대학교 감성공학과 졸업<br></br>
              2020-2021 Smart Diagosis 근무
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default About;
