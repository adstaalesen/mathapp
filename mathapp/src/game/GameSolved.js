import React from "react";

export default function GameSolved(props){

    const correctAnswer = props.correctAnswer ? "You are correct" : "Submit your answer"
    return (<p class = "game-solved">{correctAnswer}!</p>)
    
}