import React, { Component } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Route,
  Switch,
  Link,
  useRouteMatch,
  useLocation,
} from "react-router-dom";

//Import pages
import { Contents } from "../pages/index";

//Import Components
import CategoryDiv from "../components/CategoryDiv";
import ItemCell from "../components/ItemCell";

//Import Style
import { MainContainer, ContentsContainer } from "./sharedStyle";

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

export default function Works() {
  let { path, url } = useRouteMatch();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header nav="Pyeong > Works" />
      <MainContainer>
        <div className="list">
          <CategoryContainer>
            <CategoryDiv desc="UI/UX" />
            <Link to={`${url}/coc2016`}>
              <ItemCell
                alt="COC_2016"
                thumbImg={thumb_coc}
                title="COC 2016"
                category="공간 VR"
              ></ItemCell>
            </Link>
          </CategoryContainer>
        </div>
      </MainContainer>
      
      <Switch>
        <Route exact path={path} />
        <Route path={`${path}/:contentsIds`} component={Contents} />
      </Switch>
      
      {/* <Switch location={location} key={location.pathname}>
        <MainContainer>
          <div className="list">
            <CategoryContainer>
              <CategoryDiv desc="UI/UX" />
              <Link to={`${path}/b`}>
                <ItemCell
                  alt="COC_2016"
                  thumbImg={thumb_coc}
                  title="COC 2016"
                  category="공간 VR"
                ></ItemCell>
              </Link>

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
        </MainContainer>

      </Switch> */}
    </motion.div>
  );
}
