import React from "react";

export default function GameSolved(props){

    const correctAnswer = props.correctAnswer ? "You are correct" : "Submit your answer"
    return (<p className = "game-solved">{correctAnswer}!</p>)
    
}