import React, { Component } from "react";
import "./Works.css";

class Works extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="item-container">
          <div className="category uiux">
            <div className="category-title-bg">
              <div className="category-title">UI/UX</div>
            </div>

            <a href="./contents/coc2016.html" className="item-cell">
              <div>
                <img className="item-thumb" src="./img/thumb_coc.jpg" />
              </div>
              <strong>공간 VR</strong> <br></br>
              <em>COC 2016</em>
            </a>

            <a href="./contents/yng.html" className="item-cell">
              <div>
                <img className="item-thumb" src="./img/thumb_esrc_pink.jpg" />
              </div>
              <strong>UI 제작</strong> <br></br>
              <em>연애능력고사</em>
            </a>

            <a href="#" className="item-cell">
              <div>
                <img className="item-thumb" src="./img/thumb_Gutsy.jpg" />
              </div>
              <strong>UI 제작 / UX 설계</strong> <br></br>
              <em>Gutsy</em>
            </a>
          </div>

          <div className="category graphics">
            <div className="category-title-bg">
              <div className="category-title">Graphics</div>
            </div>
            <a href="#" className="item-cell">
              <div>
                <img
                  className="item-thumb"
                  src="./img/thumb_ProjectionMapping.jpg"
                />
              </div>
              <strong>프로젝션 매핑</strong> <br></br>
              <em>Dancing on the hills</em>
            </a>

            <a href="#" className="item-cell">
              <div>
                <img className="item-thumb" src="./img/thumb_MovWork.jpg" />
              </div>
              <strong>모션그래픽</strong> <br></br>
              <em>Empy jini</em>
            </a>
          </div>

          <div className="category web">
            <div className="category-title-bg">
              <div className="category-title">Web</div>
            </div>
            <a href="#" className="item-cell">
              <div>
                <img
                  className="item-thumb"
                  src="./img/thumb_ProjectionMapping.jpg"
                />
              </div>
              <strong>?</strong> <br></br>
              <em>toy project</em>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Works;
