import React from 'react'
import { NavLink } from 'react-router-dom'

function Instructions() {
    return (
        <div className="container my-4" style={{border:"2px solid black"}}>
            <h3>Instructions</h3>
            <p style={{font: "1.25rem Arial, sans-serif",color:"red"}}>

                <ol>
                
                    <li>
                    <strong>this is rule no 1 ,this is rule no 1</strong>
                    </li>
                    <li>
                    <strong>this is rule no 1 ,this is rule no 1</strong>
                    </li>
                    <li>
                    <strong>this is rule no 1 ,this is rule no 1</strong>
                    </li>
                    <li>
                    <strong>this is rule no 1 ,this is rule no 1</strong>
                    </li>
                    <li>
                    <strong>this is rule no 1 ,this is rule no 1</strong>
                    </li>
              
                    
                </ol>
                
                

            </p>
            <p>

                <NavLink to="/ExamPage" className="btn btn-primary">start</NavLink>
            </p>
        </div>
    )
}

export default Instructions
