import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function LoginCard() {
  return (
    <div className='shadow-lg'>
    <Card >
      <CardMedia
        component="img"
        height="250"
        image={require('./images/LoginRegisterCardBg.jpg')}
        alt="best bg Image"
      />
      <CardContent>
        <div className='text-center'>
        <Typography gutterBottom variant="h5" component="div">
          Login User
        </Typography>
        </div>
        <div className='container w-50'>
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

      </CardContent>

    </Card>
    </div>

  );
}
