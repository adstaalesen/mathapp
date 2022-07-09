import React from 'react';
import GameQuestionBar from './GameQuestionBar'
import GameSolved from './GameSolved';

export default function Game(){

    function getQuestion() {

        var x = Math.floor(Math.random()*10)
        var y = Math.floor(Math.random()*10)
        var temp = 0;
    
        if ((x - y) < 0) {
            temp = x;
            x = y;
            y = temp;
        }
    
        const operator = '+'
        return `${x} ${operator} ${y}`
    
    }

    function getSolution(question) {
    
        const arr = question.split(' ');    
    
        var x = parseInt(arr[0])
        var operator = arr[1]
        var y = parseInt(arr[2])
    
        var math_it_up = {
            '+': function (x, y) { return x + y },
            '-': function (x, y) { return x - y },
            '*': function (x, y) { return x * y },
            '/': function (x, y) { return x / y },
        }
    
        return math_it_up[operator](x, y)
        
    }

    const [game, SetGame] = React.useState({
        question: getQuestion(),
        answer: "",
        gameScore: 0,
        correctAnswer: false
        }
    )

    function handleChange(event) {

        const {name, value} = event.target
        SetGame(prevGame => {
            return {
                ...prevGame,
                [name]: value,
                correctAnswer: parseInt(value) === getSolution(game.question)
            }
        })
    }

    return (
        <>
        <div class = "game-question-bar">{game.question}</div>
        <form class-name = "mathform">
            <input
                class-name = "answer"
                type="text"
                name = "answer"
                onChange={handleChange} 
                value = {game.answer}
            />
        </form>
        <div>{ game.correctAnswer ? "Correct answer" : "" }</div>
        
        </>
    );
}