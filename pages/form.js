import Head from 'next/head'
import React from 'react'

export default function form() {
  return (
    <>
    <style jsx>
        {
          `
          .form-control{
            color: green
          }`
        }
      </style>
       <Head>
        <title>pikapkm || Form</title>
        <meta name="description" content="pikapkm registeration " />
        <link rel="icon" href="https://c4.wallpaperflare.com/wallpaper/119/552/901/anime-cartoon-pokemon-pikachu-wallpaper-preview.jpg" />
      </Head>
    <center >
   <div className='shadow-lg p-4' style={{marginTop:'150px',minWidth:'350px',maxWidth:'300px'}}>
  <h1>Register</h1>
  <input type='text' className='form-control mt-3' placeholder='Name'/>
  <input type='email' className='form-control mt-3' placeholder='Email'/>
  <input type='password' className='form-control mt-3' placeholder='Password'/>
  <input type='password' className='form-control mt-3' placeholder='Password'/>
  <center><button className='btn btn-primary w-75 mt-3'>Submit</button></center> 
   </div>
    </center>
    </>
  )
}
