import Head from 'next/head'
import React from 'react'
export default function login() {
  return (
    <>
    <Head>
     <title>pikapkm || Login</title>
     <meta name="description" content="pikapkm Login page" />
     <link rel="icon" href="https://c4.wallpaperflare.com/wallpaper/119/552/901/anime-cartoon-pokemon-pikachu-wallpaper-preview.jpg" />
   </Head>
 <center >
 <style jsx>
        {
          `
          .form-control{
            color: red
          }`
        }
      </style>
<div className='shadow-lg p-5' style={{marginTop:'150px',minWidth:'350px',maxWidth:'300px'}}>
<h1>Login</h1>
<input type='email' className='form-control mt-5' placeholder='Email'/>
<input type='password' className='form-control mt-5' placeholder='Password'/>
<center><button className='btn btn-primary w-75 mt-5'>Submit</button></center> 
</div>
 </center>
 </>
  )
}
