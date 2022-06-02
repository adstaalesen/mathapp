import React, { Component } from 'react';
//import GameAnswerField from './GameAnswerField';
import  GameQuestionBar from './GameQuestionBar'
import GameSolved from './GameSolved';

class Game extends Component {

    getQuestion() {

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
    
    getSolution(question) {
    
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

    constructor(props) {

        super(props);
        this.state = {
            question: this.getQuestion(),
            //solution:  this.getSolution(this.question),
            //answer: '',
            correctAnswer: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    checkAnswer(answer) {
        return ( parseInt(answer) == parseInt( this.getSolution(this.state.question ) ) )
    }

    handleChange = (e) => {
        
        if (this.checkAnswer(e.target.value)) {
            this.setState({ correctAnswer: true });
        } else {
            this.setState({ correctAnswer: false });
        }

    }

    render() {
            return (
                <>
                <GameQuestionBar question = {this.state.question} />
                <input type="text" name = "answer" onChange={this.handleChange} />
                <GameSolved correctAnswer = {this.state.correctAnswer} />
                </>
            );
        }
}
export default Game;