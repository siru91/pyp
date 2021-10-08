import React, { Component, useState, useEffect } from "react";
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
import CategoryTitleDiv from "../components/CategoryTitleDiv";
import ItemCell from "../components/ItemCell";

//Import Style
import { MainContainer, ContentsContainer } from "./sharedStyle";

//Import JSON data
import data from "../Data2.json";

const CategoryContainer = styled.div`
  float: left;
  width: 100%;
  margin-bottom: 5vh;
`;

export default function WorksList({ match }) {
  const path = match.path;

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
          {data &&
            data.map((item, idx) => {
              // JSON 오브젝트 나누기
              const [keys, entryValues] = Object.entries(item);
              const categoryName = keys[0];
              const innerDataArray = keys[1];
              return (
                // 카테고리 / 내부데이터 나눠서 생성
                <CategoryContainer key={idx}>
                  <CategoryTitleDiv key={idx} desc={categoryName} />
                  {innerDataArray.map((element) => {
                    return (
                      <ItemCell
                        key={element.id}
                        path={path}
                        alt={element.id}
                        thumbImg={process.env.PUBLIC_URL + element.thumb_img}
                        title={element.title}
                        category={element.description}
                      />
                    );
                  })}
                </CategoryContainer>
              );
            })}
        </div>
      </MainContainer>

      <Switch>
        <Route exact path={match.path} />
        <Route path={`${match.path}/:contentsId`} component={Contents} />
      </Switch>

      {/* <Switch location={location} key={location.pathname}>
        <MainContainer>
          <div className="list">
            <CategoryContainer>
              <CategoryTitleDiv desc="UI/UX" />
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
              <CategoryTitleDiv desc="Graphics" />

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
              <CategoryTitleDiv desc="Web" />

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
