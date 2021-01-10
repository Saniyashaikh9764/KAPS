import React from 'react'

function QuestionBox({currQuestion,questionsArr,setCurrentQuestion}) {
    const prevClickHandler = ()=>{
        if(currQuestion.id >0)
        setCurrentQuestion(questionsArr[currQuestion.id -1])
    }
    const nextClickHandler = ()=>{
        if(currQuestion.id < questionsArr.length-1)
        setCurrentQuestion(questionsArr[currQuestion.id +1])
    }
   
    return (
        
        
       
        <div className="card my-5 " style={{borderRadius:"20px"}}>
                <div className="card-body">
                   
                    <h5 className="card-title">Question :  {currQuestion.question}</h5>
                    <div className="card-text">
                        <ol type="A">
                            
                            <li>
                                <input type="radio" name="option" id="q1A"value="A" />
                                <span className="mx-2">{currQuestion.a}</span>
                            </li>
                            <li>
                                <input type="radio" name="option" id="q1B"value="B" />
                                <span className="mx-2">{currQuestion.b}</span>
                            </li>
                            <li>
                                <input type="radio" name="option" id="q1C"value="C" />
                                <span className="mx-2">{currQuestion.c}</span>
                            </li>
                            <li>
                                <input type="radio" name="option" id="q1D"value="D" />
                                <span className="mx-2">{currQuestion.d}</span>
                            </li>
                        </ol>
                        <div className="container">
                            <a onClick={prevClickHandler} className="btn btn-primary mx-3">prev</a>
                            <a onClick={nextClickHandler} className="btn btn-primary mx-3">next</a>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default QuestionBox
