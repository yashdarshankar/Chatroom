import React from 'react'

import { useState, useEffect } from 'react';

import axios from 'axios';

export default function Dashboard() {

    // const key = 'iamfuckingcreazy';

    useEffect(() => {
        const token = sessionStorage.getItem('token')
        const username = sessionStorage.getItem('username')
        const fun  = async() => {
            const url = "http://localhost:8090/check"
                const artical ={
                token,
                username
                }
                console.log(artical)
                console.log(artical);
                try{
                    await axios.post(url,artical).then((res) => {
                    console.log(res.data);
                    if(res.data.status === 'True'){
                        // window.location.href = "/";
                        console.log("logged in ")
                    }
                    
                        
                    })

                }catch(error){
                    // console.log("error")
                    window.location.href = "/";
                    console.log("not logged in ")
                    
                }
        }

        fun()
  },[]);

  return (


    <div><p>Hey Bro I am fine</p></div>
  )
}
