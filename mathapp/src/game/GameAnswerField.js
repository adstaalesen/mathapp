import React from "react";

// const GameAnswerField = props => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={props.answer}
//         onChange={event => console.log(`Answer ${props.answer}!`)}
//       />
//     </div>
//   );
// };
  
// export default GameAnswerField;

class GameAnswerField extends React.Component {
  constructor (props) {
      super(props);
      this.state = {answer: ''}
      this.solution = props.solution
      this.correctAnswer = props.correctAnswer
  }
  componentDidMount () {
      this.setState({answer: this.props.answer});
  }

  handleChange = (e) => {
    this.setState({ answer: e.target.value });

    if (parseInt(this.answer) == parseInt(this.solution)) {
      this.correctAnswer = true;
    }
  }

  render () {
      console.log(this.props.answer); // after update, this logs the updated name
      console.log(this.state.answer); // after update, this logs the initial name until I refresh the brower
      return <div>    
                  {this.state.answer}
                  <input type="text" name="answer" value={this.state.answer} onChange={this.handleChange} />
              </div>
  }
}

export default GameAnswerField