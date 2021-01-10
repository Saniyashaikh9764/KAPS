import React from 'react'
import AdminMain from './AdminMain'

function UserMgt() {
    function deleteEntry(){
        alert("entry deleted")
    }
    function editEntry(){
        alert("entry edited")
    }
    return (
        <div >
             <AdminMain></AdminMain>
             <div style={{marginBottom:"100px"}}>
            <h1 className="text-center">Welcome to user management</h1>
            <div className="container-fluid" >
                <table className="table table-striped table-hover">
                    <thead>
                        <tr className="table-primary">
                            <th >Name</th>
                            <th> Email</th>
                            <th> Phone no</th>
                            <th> Subject</th>
                            <th> Marks</th>
                            <th>Edit</th>
                            <th> Delete</th>
                       </tr>
                       </thead>
                       <tbody>
                       <tr>
                           <td>Aditya</td>
                           <td>abc@gmail.com</td>
                           <td>12345</td>
                           <td>Java</td>
                           <td>100</td>
                           <td><button  className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editUser">edit</button></td>
                           <td><button onClick={deleteEntry} className="btn btn-danger">delete</button></td>
                          
                       </tr>
                       <tr>
                           <td>Aditya</td>
                           <td>abc@gmail.com</td>
                           <td>12345</td>
                           <td>Java</td>
                           <td>100</td>
                           <td><button  className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editUser">edit</button></td>
                           <td><button onClick={deleteEntry} className="btn btn-danger">delete</button></td>
                           
                       </tr>
                       <tr>
                           <td>Aditya</td>
                           <td>abc@gmail.com</td>
                           <td>12345</td>
                           <td>Java</td>
                           <td>100</td>
                           <td><button  className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editUser">edit</button></td>
                           {/* write onclick */}
                           <td><button onClick={deleteEntry} className="btn btn-danger">delete</button></td>
                           
                       </tr>
                       </tbody>
                </table>
            </div>
            {/*  on edit this opens */}
            <div class="modal fade" id="editUser" tabindex="-1" aria-labelledby="EditUser" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" > Edit user
                    </h5>
                    {/* <!-- this is cross mark --> */}
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                </div>
                <div class="modal-body">
                    <form id="edit-form" method="post" onSubmit={editEntry}>
                        <div class="mb-3">
                          <label for="username" class="form-label">Username</label>
                          <input type="text" class="form-control" id="username" />
                           {/* <div id="username" class="form-text">create a suitable username.</div>  */}
                        </div>
                        <div class="mb-3">
                          <label for="emailId" class="form-label">Email Id</label>
                          <input type="text" class="form-control" id="emailId"/>
                        </div>
                        <div class="mb-3">
                            <label for="phoneNo" class="form-label">Phone No</label>
                            <input type="text" class="form-control" id="phoneNo"/>
                          </div>
                          <div class="mb-3">
                            <label for="subject" class="form-label">Subject</label>
                            <input type="text" class="form-control" id="subject"/>
                          </div>
                          <div class="mb-3">
                            <label for="marks" class="form-label">Marks</label>
                            <input type="text" class="form-control" id="marks"/>
                          </div>
                         
                            
                        {/* <!-- <button type="submit" class="btn btn-primary">Submit</button> --> */}
                      </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">close</button>
                    <button type="submit" form="edit-form" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>

        </div>
        </div>
    )
}

export default UserMgt
