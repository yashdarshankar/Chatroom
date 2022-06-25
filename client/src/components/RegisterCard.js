import * as React from 'react';



import './style/cards.css'

export default function RegisterCard() {
  return (

    //  name = request.form['name']
    //  email = request.form['email']
    // contact = request.form['contact']
    //  username = request.form['username']
    //  password = request.form['password']


      <div class="card shadow-lg">
      <img class="card-img-top" src={require('./images/LoginRegisterCardBg.jpg')} alt="bgimage"/>
      <div class="card-body ">
        <h5 class="card-title text-center">Register User</h5>
        <div className='w-100'>
        <form>
             <div className="mb-3">
               <label className="form-label">Name</label>
               <input type="text" className="form-control" name="name" aria-describedby="emailHelp"/>
             </div>
             <div className="mb-3">
               <label className="form-label">Email</label>
               <input type="email" className="form-control" name="email" aria-describedby="emailHelp"/>
             </div>
             <div className="mb-3">
               <label className="form-label">Contact No</label>
               <input type="number" className="form-control" name="contact" aria-describedby="emailHelp"/>
             </div>
             <div className="mb-3">
               <label className="form-label">Create Username</label>
               <input type="text" className="form-control" name='username'/>
             </div>
             <div className="mb-3">
               <label className="form-label">Create Password</label>
               <input type="password" className="form-control" name='password'/>
             </div>
             <div className="mb-3">
               <label className="form-label">Confirm Password</label>
               <input type="password" className="form-control" name='confpassword'/>
             </div>
             <button type="submit" className="btn btn-primary w-100 mb-5">Submit</button>
           </form>
        </div>
      </div>
    </div>
   

    //  <div className='shadow-lg'>
    //    <div class="card">
    //      <img class="card-img-top" src={require('./images/LoginRegisterCardBg.jpg')} alt="bgimage"/>
    //      <div class="card-body">
    //        <h5 class="card-title text-center">Login</h5>
    //        <div className='w-100'>
    //        <form>
    //          <div className="mb-3">
    //            <label className="form-label">Name</label>
    //            <input type="text" className="form-control" name="name" aria-describedby="emailHelp"/>
    //          </div>
    //          <div className="mb-3">
    //            <label className="form-label">Email</label>
    //            <input type="email" className="form-control" name="email" aria-describedby="emailHelp"/>
    //          </div>
    //          <div className="mb-3">
    //            <label className="form-label">Contact No</label>
    //            <input type="number" className="form-control" name="contact" aria-describedby="emailHelp"/>
    //          </div>
    //          <div className="mb-3">
    //            <label className="form-label">Create Username</label>
    //            <input type="text" className="form-control" name='username'/>
    //          </div>
    //          <div className="mb-3">
    //            <label className="form-label">Create Password</label>
    //            <input type="password" className="form-control" name='password'/>
    //          </div>
    //          <div className="mb-3">
    //            <label className="form-label">Confirm Password</label>
    //            <input type="password" className="form-control" name='confpassword'/>
    //          </div>
    //          <button type="submit" className="btn btn-primary w-100 mb-5">Submit</button>
    //        </form>
    //      </div>
    //    </div>
    //  </div>

 
  );
}
