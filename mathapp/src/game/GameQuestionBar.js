import { render } from "@testing-library/react";
import React from "react";

export default function GameQuestionBar(props) {
    console.log(`Question is ${props.question}`)
    return <div className = "game-question-bar">{props.question}</div>;
   }


   