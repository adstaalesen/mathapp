import { render } from "@testing-library/react";
import React from "react";

const GameQuestionBar = (props) => {
    var question = props.question
    console.log(`Question is ${question}`)
    return <div class = "game-question-bar">{props.question}</div>;
   }

export default GameQuestionBar;