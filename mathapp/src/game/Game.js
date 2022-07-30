import React from 'react';
import Input from '@mui/material/Input';
import { getQuestion, getSolution } from './GameLogic';

const ariaLabel = { 'aria-label': 'description' };

export default function Game(props){

    const [game, SetGame] = React.useState({
        question: getQuestion(props.settings),
        answer: "",
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

    React.useEffect(() => {
        if (game.correctAnswer) {

            props.setScore(prevScore => prevScore + 1)

            const timer = setTimeout(() => {
                SetGame({
                    question: getQuestion(props.settings),
                    answer: "",
                    correctAnswer: false
                    });
              }, 500);
            
            return () => clearTimeout(timer);

            // SetGame({
            //     question: getQuestion(props.settings),
            //     answer: "",
            //     correctAnswer: false
            //     })

        }

    }, [game.correctAnswer])
    
    return (
        <main>
            <div key={props.score} className = {game.correctAnswer ? "game-won" : "game"}>
                <div className = "game-question-bar">{game.question}</div>
                <form className = "math-form">
                    <Input placeholder = "?" autoFocus = {true} onChange = {handleChange} name = "answer" inputProps={ariaLabel} />
                </form>
            </div>
        </main>
    );
}