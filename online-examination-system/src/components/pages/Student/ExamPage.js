import React ,{ useState, useEffect }  from 'react'
import {Route , BrowserRouter as Router, Switch} from 'react-router-dom'

import questions from '../../../Quiz'
import QuestionBox from './QuestionBox'
import QuestionButtons from './QuestionButtons'
import Timer from './Timer'

function ExamPage() {

    const [questionsArr, setquestionsArr] = useState(questions)
    const [currQuestion,setCurrentQuestion]= useState(questions[0])
    const [selectedAnsArr,setSelectedAnsArr]= useState([])

    const collectAllAns =()=>{}
    //timer
    const time = new Date();
    time.setSeconds(time.getSeconds() + 3600); // 10 minutes timer= 10*60=600
    return (

        <div className="greenShade">
            
          
             {/* Whole page */}
            <div className="container-fluid  examContainer " >
                <div className="row">{/* All 3 boxes in a row */}
                    <div className="col-md-4">{/* first box of 1,2,3,4 */}
                        <div className="card my-5" style={{borderRadius:"20px"}}>
                            <div className="card-body">
                                <h5 className="card-title">Java</h5>
                                <div className="card-text">
                                    <div className="container">
                                        <div className="row my2">
                                            {
                                                questions.map((quest)=>
                                                ( 
                                                <QuestionButtons
                                                    key ={quest.id}
                                                  index={quest.id}
                                                  setCurrentQuestion={setCurrentQuestion}
                                                  questionsArr={questionsArr}
                                                  //
                                                /> ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* question panel */}
                    <div className="col-md-8">{/* Second box where question displayed */}
                    <Timer expiryTimestamp={time} />
                   
                        <QuestionBox currQuestion={currQuestion }
                        questionsArr={questionsArr}
                        setCurrentQuestion={setCurrentQuestion}
                         /> 
                         <div style={{marginLeft:"25%"}}>
                         <a  style={{borderRadius:"20px",padding:"10px 30px"}} className="btn btn-warning">Submit</a>  
                         </div>          
                         

                    </div>
                    
                        
                    
                </div>
            </div>
        </div>
         )
}

export default ExamPage
