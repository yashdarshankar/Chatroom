import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function RegisterCard() {
  return (

    // name = request.form['name']
    // email = request.form['email']
    // contact = request.form['contact']
    // username = request.form['username']
    // password = request.form['password']


    <div className='shadow-lg'>
   <Card >
      <CardMedia
        component="img"
        height="250"
        image={require('./images/LoginRegisterCardBg.jpg')} 
        alt="green iguana"
      />
      <CardContent>
      <div className='text-center'>
      <Typography gutterBottom variant="h5" component="div">
          Register User
        </Typography>
      </div>

        <div className='container w-50'>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" className="form-control" name="name" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" className="form-control" name="email" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Contact No</label>
            <input type="number" className="form-control" name="contact" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Create Username</label>
            <input type="text" className="form-control" name='username'/>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Create Password</label>
            <input type="password" className="form-control" name='password'/>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" name='confpassword'/>
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-5">Submit</button>
        </form>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
 
  );
}
