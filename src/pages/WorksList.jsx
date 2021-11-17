import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

//Import Components
import CategoryTitleDiv from "../components/CategoryTitleDiv";
import ItemCell from "../components/ItemCell";

//Import Style
import { MainContainer } from "./sharedStyle";

//Import JSON data
// import JSON_DATA from "../Data.json";
// import JSON_DATA from "../Data2.json";
import JSON_DATA from "../Data3.json";

const Grid = styled.div`
  display: grid;
  width: 100%;
  margin-bottom: 5vh;
`;
export default function WorksList({ match }) {
  const path = match.path;

  //스크롤을 맨 위로... 상황에 따라 조건이 필요할지도
  window.scrollTo(0, 0);

  return (
    <>
      <Header nav="Works" />

      <MainContainer paddingToTop={"15rem"}>
        <div className="itemList">
          {JSON_DATA &&
            JSON_DATA.map((item) => {
              return (
                <>
                  <ItemCell
                    key={item.id}
                    path={path}
                    alt={item.id}
                    thumbImg={process.env.PUBLIC_URL + item.thumb_img}
                    title={item.title}
                    subtitle={item.subtitle}
                  />
                </>
              );
            })}
        </div>
      </MainContainer>
    </>
  );
}

/*
211117 카테고리 있는 코드
// const CategoryContainer = styled.div`
//   float: left;
//   width: 100%;
//   margin-bottom: 5vh;
// `;

{JSON_DATA &&
            JSON_DATA.map((item, idx) => {
              // JSON 오브젝트 나누기
              var a = 0;
              const [keys, entryValues] = Object.entries(item);
              const categoryName = keys[0];
              const innerDataArray = keys[1];
              a += 1;
              return (
                // 카테고리 / 내부데이터 나눠서 생성
                <CategoryContainer key={"cc" + idx}>
                  <CategoryTitleDiv key={"ct" + idx} desc={categoryName} />
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
 
 */
