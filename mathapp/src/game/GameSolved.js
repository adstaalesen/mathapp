import { render } from "@testing-library/react";
import React from "react";

function GameSolved(props){

    const correctAnswer = props.correctAnswer

    if (correctAnswer) {
        return <p class = "game-solved">You are correct!</p>;
    }
    else {
        return  <p>Submit your answer!</p>;
    }

   }

export default GameSolved;