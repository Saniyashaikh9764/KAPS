import React, { useState,useEffect }  from 'react'
import AdminMain from './AdminMain'
import "./QuestionEdit.css"
import { Link } from 'react-router-dom';
import axios from 'axios';

function QuestionEdit() {
    function addQuestion() {
        alert("question added")
    }
    const [subjects,setSubjects]= useState([])

    useEffect(()=>{
       loadSubjects();
    },[]);

    const loadSubjects= async()=>{

        const result=await axios.get('http://localhost:5000/postSubjects');
        setSubjects(result.data);
        
    }
    
    return (
        <div>
            <AdminMain></AdminMain>
            <h1>you can edit question here</h1>
            {/* <!-- Button trigger modal --> */}


            {/* <!-- button,modal,modaldialog,modal content,modal header , modal title -->
  <!-- Modal --> */}
            <div class="modal fade" id="add_question" tabindex="-1" aria-labelledby="addQuestion" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" >Add question
                    </h5>
                            {/* <!-- this is cross mark --> */}
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                        </div>
                        <div class="modal-body">
                            <form id="q-form" method="post" onSubmit={addQuestion}>
                                <div class="mb-3">
                                    <label for="question" class="form-label">Question</label>
                                    <input type="text" class="form-control" id="question" />
                                    <div id="question" class="form-text">create a suitable question.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="optionA" class="form-label">Option A</label>
                                    <input type="text" class="form-control" id="optionA" />
                                </div>
                                <div class="mb-3">
                                    <label for="optionB" class="form-label">Option B</label>
                                    <input type="text" class="form-control" id="optionB" />
                                </div>
                                <div class="mb-3">
                                    <label for="optionC" class="form-label">Option C</label>
                                    <input type="text" class="form-control" id="optionC" />
                                </div>
                                <div class="mb-3">
                                    <label for="optionD" class="form-label">Option D</label>
                                    <input type="text" class="form-control" id="optionD" />
                                </div>
                                <div id="question" class="form-text">Select correct answer.</div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="ans" id="A" />
                                    <label class="form-check-label" for="A">
                                        Option A
                                </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="ans" id="B" />
                                    <label class="form-check-label" for="B">
                                        Option B
                                </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="ans" id="C" />
                                    <label class="form-check-label" for="C">
                                        Option C
                                </label>
                                </div>
                                <div class="form-check mb-2">
                                    <input class="form-check-input" type="radio" name="ans" id="D" />
                                    <label class="form-check-label" for="D">
                                        Option D
                                </label>
                                </div>

                                {/* <!-- <button type="submit" class="btn btn-primary">Submit</button> --> */}
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">close</button>
                            <button type="submit" form="q-form" class="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5" >
            <div className="row">
               {
                   subjects.map((sub,index)=>(
                    <div className="col-md-3">
                    <div className="card " style={{border:"2px solid blue",borderRadius:"20px"}}>
                    <div className="card-body">
                        
                        <h4 className="card-title">{sub.Name}</h4><hr></hr>
                        <div className="card-text text-muted"> {sub.Description}</div>
                        <div className="container-qadder">
                        <button type="button" className="btn btn-primary qadder" data-bs-toggle="modal" data-bs-target="#add_question"
                         >Add question</button>
                                </div>
                    </div>
                    </div>   
                    </div>
                   ))
               }
                               
               
                
                
            </div>
        </div>
           

        </div>
    )
}

export default QuestionEdit
