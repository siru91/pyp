import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

//Import Components
import CategoryTitleDiv from "../components/CategoryTitleDiv";
import ItemCell from "../components/ItemCell";

//Import Style
import { MainContainer } from "./sharedStyle";

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
    <>
      <Header nav="Works" />

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
    </>
  );
}
