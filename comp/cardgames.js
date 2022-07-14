import React from 'react'

export default function cardgames() {
    const person =[
        {title:'Pokemon Ash gray Download || cheat codes',url:'66',description:'Pokemon Ash gray Download as well as cheat codes of game',imgurl:'https://img.pokemoncoders.com/wp-content/uploads/2018/09/bpg-pokemon-ash-gray.png'},
        {title:'Pokemon Fire red Download || cheat codes',url:'660',description:'Pokemon fire red Download as well as cheat codes of game',imgurl:'https://assets-prd.ignimgs.com/2022/01/31/pokemon-firered-button-crop-1643616703712.jpg'},
        {title:'Pokemon Ash version Download || cheat codes ',url:'664',description:'Pokemon Ash versionDownload as well as cheat codes of game',imgurl:'https://www.pokeharbor.com/wp-content/uploads/2021/05/picsart-05-27-01-16-46_1-2.png'}, 
      ]
  return (
    <>
     <center> 
        <h1 className='mt-4'> Best Games</h1>
          <div className='d-flex flex-wrap mt-4' >
       {person.map((element)=>(
     <div class="card text-start" style={{maxWidth:'350px',minWidth:'300px' , marginLeft:'70px',marginTop:'17px'}}>
     <img class="card-img-top" src={element.imgurl} alt="Title"/>
     <div class="card-body">
       <h4 class="card-title">{element.title}</h4>
       <p class="card-text">{element.description}</p>
      <center> <button className='  btn btn-primary'> <a style={{color:'white' , textDecoration:'none'}}  href={element.url}>Download</a></button></center>
     </div>
   </div>
       ))}</div>
      </center>
    </>
  )
}
