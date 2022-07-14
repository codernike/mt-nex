import React from 'react'

export default function containerhome() {
  return (
    <>
   
    <center >

        <div style={{marginTop:'100px',fontSize:'2em',}}>
           <h1>Welcome to pikapkm</h1>
           <div className='lead w-50' >The original Pokémon is a role-playing game based around building a small team of monsters to battle other monsters in a quest to become the best</div>
       <button className=' btn btn-primary m-2'><a style={{color:'white' , textDecoration:'none'}}  href='/games'>Best games</a></button><button className=' btn btn-danger'><a style={{color:'white' , textDecoration:'none'}}  href='/games'>Explore games</a></button>
        </div>
    </center>
    </>
  )
}
