import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';

export class Adm_login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errormessage: ''
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';


        if (nam === "email") {
            if (val == "") {
                err = '*Cannot proceed without email!';
            }
        }

        this.setState({ errormessage: err });
        this.setState({ [nam]: val });
    }
    render() {
        return (
            <div class="container-fluid" >
                <div class="container">
                    <div class="row mb-3">
                        <div class="center">
                            <div class="card">
                                <div class="card-header" style={{ backgroundColor: 'lightblue' }}>
                                    <h1 class="text-center" style={{paddingTop:'15px',textDecoration:'underline Grey'}}>Admin Login</h1>
                                    <hr />
                                </div>
                                <div class="card-body">
                                <hr />
                                    <div class="row">
                                        <div class="col-md-7">
                                            <form>
                                                <div class="mb-3 row" style={{padding:'3px'}}>
                                                    <div class="col-md-4">
                                                        <label for="email">Enter official E-Mail ID</label>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <input type="email" name="email" class="form-control" placeholder="Enter Registered email address" onChange={this.myChangeHandler} required/>
                                                        {this.state.errormessage}
                                                    </div>
                                                </div>

                                                <div class="mb-3 row" style={{padding:'3px'}}>
                                                    <div class="col-md-4">
                                                        <label for="password">Password</label>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <input type="password" name="password" class="form-control" placeholder="Enter Password" required/>

                                                    </div>
                                                </div>

                                                <div class="mb-3 row" style={{padding:'3px'}}>
                                                    <div class="col-md-4">
                                                    </div>
                                                    <div class="col-md-8">
                                                       <NavLink to="/AdminMain/usermgt"><button class="btn btn-primary" >Login</button></NavLink> 
                                                        
                                                    </div>
                                                </div>

                                                <div class="mb-3 row" style={{padding:'3px'}}>
                                                    <div class="col-md-4">
                                                    </div>
                                                    <div class="col-md-8">
                                                        <p style={{fontSize:"15px"}}>Dont have an account yet? Create a new Administrator account. </p>
                                                        <Link to='/admin-register' >Click Here</Link>                                   
                                                 </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Adm_login
