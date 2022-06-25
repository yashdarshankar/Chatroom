import * as React from 'react';


// import './style/cards.css'

export default function LoginCard() {
  return (
    
      <div class="card shadow-lg">
      <img class="card-img-top" src={require('./images/LoginRegisterCardBg.jpg')} alt="bgimage"/>
      <div class="card-body">
        <h5 class="card-title text-center">Register User</h5>
        <div className='w-100'>
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Username</label>
              <input type="email" className="form-control" name="username" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" name='password'/>
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-5">Submit</button>
          </form>
        </div>
      </div>
    </div>
   



  );
}
