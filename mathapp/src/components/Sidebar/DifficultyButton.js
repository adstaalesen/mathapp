import React from "react"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function DifficultyButton(props) {
    
    // Button that lets u toggle difficulty. Want emojies in here as well.

    
    
    return (
        <div className = "difficulty-button-container">
            <Button>–</Button>
            <p className="score-text">10</p>
            <Button>+</Button>
        </div>
    )

}