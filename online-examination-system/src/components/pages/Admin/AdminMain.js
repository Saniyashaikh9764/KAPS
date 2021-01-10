import React from 'react'
import { NavLink } from 'react-router-dom'
import './Adm-nav.css'


function AdminMain() {
    return (
        <div >
            {/* <h1>Admin page</h1> */}
            <nav className="blueShade adm-nav-header ">
                <ul className="nav adm-nav-links ">
                    <li  className="nav-item text-light adm-li">
                        <NavLink  to="/AdminMain/usermgt" className="nav-link active adm-a" > User management</NavLink>    
                     </li>
                     <li className="nav-item adm-li">
                        <NavLink  to="/AdminMain/questionedit" className="nav-link adm-a">Questions </NavLink>    
                     </li>
                     <li className="nav-item adm-li">
                        <NavLink  to="/AdminMain/addsubjects" className="nav-link adm-a">Add Subjects</NavLink>    
                     </li>
                     <li className="nav-item adm-li">
                        <NavLink  to="/AdminMain/displayquestions" className="nav-link adm-a">display questions</NavLink>    
                     </li>
                </ul>
            </nav>
            
           
        </div>
    )
}

export default AdminMain
