import React from "react"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function DifficultyButton(props) {
    
    // Button that lets u toggle difficulty. Want emojies in here as well.

    return (
        <div className = "difficulty-button-container">
            <Button onClick={() => props.incrementDifficulty(-1)}>–</Button>
            <p className="score-text">{props.difficulty}</p>
            <Button onClick={() => props.incrementDifficulty(1)}>+</Button>
        </div>
    )

}