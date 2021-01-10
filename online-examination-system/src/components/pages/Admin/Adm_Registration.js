import React, { Component } from 'react'

export class Adm_Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            number: '',
            password: '',
            confirm_password: '',
            errormessage: ''
        };
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';

        if (nam === "name") {
            if (val == "") {
                err = '*Please Enter your name for registration!';
            }
        }  
        if (nam === 'email') {
            if (val == "") {
                err = '*Please Enter your e-mail for registration!';
            }
        }  
        if (nam === "number") {
            if (val != "" && !Number(val)) {
                err = '*Please enter a valid number';
            }
        }

        this.setState({ errormessage: err });
        this.setState({ [nam]: val });
    }
 
    
    render() {
        return (
            <div class="container-fluid">
                <div class="container">
                    <div class="row mb-3">
                        <div class="center">
                            <div class="card">
                                <div class="card-header" style={{ backgroundColor: 'lightblue' }}>
                                    <h1 class="text-center" style={{paddingTop:'15px',textDecoration:'underline Grey'}}>Admin Registeration</h1>
                                    <hr />
                                </div>
                                <div class="card-body">
                                <hr />
                                    <div class="row">
                                        <div class="col-md-7">
                                            <form>
                                                <div class="mb-3 row" style={{padding:'3px'}}>
                                                    <div class="col-md-4">
                                                        <label for="name">Name</label>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <input type="text" name="name" class="form-control" placeholder="Type your name here" onChange={this.myChangeHandler} required />

                                                    </div>
                                                </div>

                                                <div class="mb-3 row" style={{padding:'3px'}}>
                                                    <div class="col-md-4">
                                                        <label for="email">E-mail</label>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <input type="email" name="email" class="form-control" placeholder="Type your e-mail" onChange={this.myChangeHandler} required />

                                                    </div>
                                                </div>

                                                <div class="mb-3 row" style={{padding:'3px'}}>
                                                    <div class="col-md-4">
                                                        <label for="number">Phone Number</label>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <input type="text" minLength='10' maxLength='10' name="number" class="form-control" placeholder="So we can reach you" onChange={this.myChangeHandler} required />

                                                    </div>
                                                </div>

                                                <div class="mb-3 row" style={{padding:'3px'}}>
                                                    <div class="col-md-4">
                                                        <label for="password">Password</label>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <input type="password" id="txtPassword" class="form-control password" placeholder="Enter password for your account." required />

                                                    </div>
                                                </div>

                                                <div class="mb-3 row" style={{padding:'3px'}}>
                                                    <div class="col-md-4">
                                                        <label for="confirm_password">Confirm Password</label>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <input type="password" id="txtConfirmPassword" class="form-control confirmPassword" placeholder="re-Enter password for your account" required />
                                                        <span id='errdisplay' style={{fontSize:'13px'}}></span>

                                                    </div>
                                                </div>

                                                <div class="mb-3 row" style={{padding:'3px'}}>
                                                    <div class="col-md-4">
                                                        <label for="organisation">Select Organisation</label>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <select name='org1' required>
                                                            <option value="" selected>Select your Sector</option>
                                                            <option value='scl'>School</option>
                                                            <option value='clg'>College</option>
                                                            <option value='corp'>Corporate</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="mb-3 row" style={{padding:'3px'}}>
                                                    <div class="col-md-4">
                                                        <label for="organisation_name">Name of the organisation</label>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <input type="text" name="organisation_name" class="form-control" placeholder="Name of your Orangisation" required/>

                                                    </div>
                                                </div>

                                                <div class="mb-3 row" style={{padding:'3px'}}>
                                                    <div class="col-md-4">
                                                    </div>
                                                    <div class="col-md-8">
                                                        <button class="btn btn-primary" type='submit' id='btnSubmit' >Register</button>
                                                        {this.state.errormessage}
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

export default Adm_Registration
