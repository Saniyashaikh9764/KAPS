import React,{ useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';

function TestSelection() {
    const [subjects,setSubjects]= useState([])

    useEffect(()=>{
       loadSubjects();
    },[]);

    const loadSubjects= async()=>{

        const result=await axios.get('http://localhost:5000/postSubjects');
        setSubjects(result.data);
        
    }
    return (
        <div className="container my-4" style={{border:"2px solid black" , background:"lightgrey"}}>
            <div className="row my-4 ">
            {
                   subjects.map((sub,index)=>(
                 <div className="col-md-3 col-sm-6 "style={{paddingBottom:'20px'}}>
                    <div className="card " >
                        <img src="../../images/test.jpg" className="card-img-top" alt="All The Best" />
                        <div className="card-body">
                            <h2 className="card-title">{sub.Name}</h2>
                            <p className="card-text">{sub.Description}</p>
                           
                            <NavLink to="/Instructions" className="btn btn-primary" >Take Test</NavLink>
                        </div>

                    </div>

                </div> 
                ))
               }
               
               
               
            </div>
        </div>
    )
}

export default TestSelection
