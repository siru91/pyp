import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MainContainer } from "./sharedStyle";
import ImageGallery from "react-image-gallery";
import JSON_DATA from "../Data2.json";
import Header from "../components/Header";
import Items from "./Contents__Items";

import gal from "./Gallery.css";

import Coc2016 from "./Works__/Coc2016";
import { useParams } from "react-router-dom";

export default function Contents({ match, history }) {
  let { contentsId } = useParams();
  console.log("id:" + contentsId);

  switch (contentsId) {
    case "coc2016":
      return Coc2016({ match, history });

    case "yng":
      return;

    case "gutsy":
      return;

    case "doh":
      return;

    case "jini":
      return;

    case "viaf2021":
      return;

    case "toy_proj":
      return;

    default:
      //return 404;
      return <div> 404 NOT FOUND. </div>;
  }
}
