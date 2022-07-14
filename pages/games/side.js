
import Head from 'next/head'
import React from 'react'
export default function side(props) {
    const person =[
        {title:'Pokemon Ash gray Download || cheat codes',url:'66',description:'Pokemon Ash gray Download as well as cheat codes of game',imgurl:'https://img.pokemoncoders.com/wp-content/uploads/2018/09/bpg-pokemon-ash-gray.png'},
        {title:'Pokemon Fire red Download || cheat codes',url:'660',description:'Pokemon fire red Download as well as cheat codes of game',imgurl:'https://assets-prd.ignimgs.com/2022/01/31/pokemon-firered-button-crop-1643616703712.jpg'},
        {title:'Pokemon Ash version Download || cheat codes ',url:'664',description:'Pokemon Ash versionDownload as well as cheat codes of game',imgurl:'https://www.pokeharbor.com/wp-content/uploads/2021/05/picsart-05-27-01-16-46_1-2.png'}, 
        {title:'Pokemon sinnoh legacy Download || cheat codes ',url:'668',description:'Pokemon Sinnoh legacy Download as well as cheat codes of game',imgurl:'https://images-na.ssl-images-amazon.com/images/I/91FGGnUq6EL.jpg'},
        {title:'Pokemon kalos Download || cheat codes',url:'667',description:'Pokemon Kalos Download as well as cheat codes of game',imgurl:'https://romspure.cc/wp-content/uploads/2021/01/65c0233e01a5488bc410d5515bc22aad.png'},
        {title:'Pokemon Last fire red Download || cheat codes',url:'667',description:'Pokemon Last fire red Download as well as cheat codes of game',imgurl:'https://romspure.cc/wp-content/uploads/2021/01/Pokemon-The-Last-Fire-Red.png'},
        {title:'Pokemon Emerald Download || cheat codes',url:'/games/emerald',description:'Pokemon Emerald Download as well as cheat codes of game',imgurl:'https://m.media-amazon.com/images/I/510BNCVM1NL.jpg'},
        {title:'Pokemon Sors Download || cheat codes',url:'667',description:'Pokemon Sors Download as well as cheat codes of game',imgurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRgLW63m_LuaW8YefOPadP3AsdThIcds2qFQ&usqp=CAU'},
      ]
  return (
  <>
 
 <Head>
        <title>pokemon Emerald</title>
        <meta name="description" content="Pokemon emerald dowload || cheats  " />
        <link rel="icon" href="https://c4.wallpaperflare.com/wallpaper/119/552/901/anime-cartoon-pokemon-pikachu-wallpaper-preview.jpg" />
      </Head>
  <div className='w-100'>
    <div className=' img-thumbnail  mt-4 float-start '>
      <img src={props.urlimage} className=' img-thumbnail' style={{height:'500px'}} />
    </div>
    <div className=' mt-4  float-end 'style={{height:'450px',overflow:'scroll',marginLeft:'20px',width:'400px'}} >
<center><h1>Games</h1></center>
{person.map((element)=>(
      
     <div class="card my-3 shadow-sm" >
     <div class="card-body">
       <h4 class="card-title"> <a style={{textDecoration:'none'}} href={element.url} >{element.title}</a></h4>
     </div>
   </div>
       ))}
    </div>
  </div>
<ul className='d-flex gap-3 fs-3 w-100 bg-white text-dark' style={{textDecoration:'none',listStyle:'none'}}>
    </ul>
  
  
  </>

  )
}
       