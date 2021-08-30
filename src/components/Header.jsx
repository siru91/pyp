import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    function init() {
      // When the user scrolls down 50px from the top of the document, resize the header's font size
      window.onscroll = function () {
        scrollFunction();
      };
    }

    // 스크롤 시 헤더 메뉴 사이즈 조절
    function scrollFunction() {
      var headerContainer = document.querySelector("#header");
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        headerContainer.style.fontSize = "1.7em";
        headerContainer.style.padding = "1.5vh 1vh";
      } else {
        headerContainer.style.fontSize = "2em";
        headerContainer.style.padding = "4vh 1vh";
      }
    }

    function setTitleNavigation(currentPositionStr) {
      const PAGE_NAME = "Pyeong";
      var headerTitle = document.querySelector(".py");
      headerTitle.innerHTML = `${PAGE_NAME} > ${currentPositionStr}`;
    }

    // INIT FUNCTION
    init();

    return (
      <div id="header">
        <div className="py">Pyeong</div>
      </div>
    );
  }
}

export default Header;
