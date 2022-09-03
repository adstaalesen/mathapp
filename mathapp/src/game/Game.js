import React from 'react';
import Input from '@mui/material/Input';
import { getQuestion, getSolution } from './GameLogic';
import DifficultyButton from '../components/Sidebar/DifficultyButton';

const ariaLabel = { 'aria-label': 'description' };

export default function Game(props){

    const [game, SetGame] = React.useState({
        question: getQuestion(props.settings),
        answer: "",
        correctAnswer: false
        }
    )

    function controlNumericalInput(event){
        console.log(event.key)
        if (!/[0-9-]/.test(event.key)) {
          event.preventDefault();
        }
    }

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
        }

    }, [game.correctAnswer])
    
    return (
        <div className='game-container'>
            <div key={props.score} className = {game.correctAnswer ? "game-won" : "game"}>
                <div className = "game-question-bar">{game.question}</div>
                <form className = "math-form">
                    <Input
                        placeholder = "answer"
                        autoFocus = {true}
                        onKeyPress = {controlNumericalInput}
                        onChange = {handleChange}
                        name = "answer"
                        inputProps={ariaLabel} 
                        fullWidth = {true}
                    />
                </form>
            </div>
        </div>
    );
}