import React from 'react';
import "../components/Quiz/Quiz.css";

const Question = ({currentQuestion,updateSubmission,currentQuestionIndex, selectedOption}) => {

    // console.log(currentQuestion);
  return (
    <div>
      <h3 className='question'>{currentQuestion.id}. {currentQuestion.question}</h3>
      <div className='options'>
        {
            currentQuestion.choice.map((choose)=> {

                return (
                    <div className='align-input'>
                        <label htmlFor={choose.text}>
                            <input 
                            type="radio"  
                            id={choose.text}
                            name={currentQuestion.question}
                            value={choose.text}
                            checked={choose.text === selectedOption}
                            onChange={()=> updateSubmission(currentQuestionIndex,choose.text)}
                            />
                            {choose.text}
                        </label>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Question;
