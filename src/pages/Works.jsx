import React, { Component } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

//Import Components
import CategoryDiv from "../components/CategoryDiv";
import ItemCell from "../components/ItemCell";
import Contents from "./Contents";

//Import Style
import { MainContainer } from "./sharedStyle";

//Import thumbnail images
import thumb_coc from "../img/thumb_coc.jpg";
import thumb_yng from "../img/thumb_esrc_pink.jpg";
import thumb_gutsy from "../img/thumb_Gutsy.jpg";
import thumb_doh from "../img/thumb_ProjectionMapping.jpg";
import thumb_jini from "../img/thumb_MovWork.jpg";
import thumb_toyp from "../img/thumb_ProjectionMapping2.jpg";

const CategoryContainer = styled.div`
  float: left;
  width: 100%;
  margin-bottom: 5vh;
`;

class Works extends Component {
  render() {
    return (
      <>
        <Header nav="Pyeong > Works" />
        <MainContainer>
          <div className="list">
            <CategoryContainer>
              <CategoryDiv desc="UI/UX" />

              <ItemCell
                alt="COC 2016"
                thumbImg={thumb_coc}
                title="COC 2016"
                category="공간 VR"
                goTo="coc2016"
              ></ItemCell>

              <ItemCell
                alt="연애능력고사"
                thumbImg={thumb_yng}
                title="연애능력고사"
                category="UI 제작"
              ></ItemCell>

              <ItemCell
                alt="Gutsy"
                thumbImg={thumb_gutsy}
                title="Gutsy"
                category="UI 제작 / UX 설계"
              ></ItemCell>
            </CategoryContainer>

            <CategoryContainer>
              <CategoryDiv desc="Graphics" />

              <ItemCell
                alt="Dancing on the hills"
                thumbImg={thumb_doh}
                title="Dancing on the hills"
                category="프로젝션 매핑"
              ></ItemCell>

              <ItemCell
                alt="Empi Jini"
                thumbImg={thumb_jini}
                title="Empi Jini"
                category="모션그래픽"
              ></ItemCell>
            </CategoryContainer>

            <CategoryContainer>
              <CategoryDiv desc="Web" />

              <ItemCell
                alt="Viaf2021"
                thumbImg={thumb_coc}
                title="VIAF 2021"
                category="Web Interactive"
              ></ItemCell>

              <ItemCell
                alt="Toy Projects"
                thumbImg={thumb_toyp}
                title="Toy projects"
                category="기타"
              ></ItemCell>
            </CategoryContainer>
          </div>

          <Contents></Contents>
        </MainContainer>
      </>
    );
  }
}

export default Works;
