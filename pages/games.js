import Head from 'next/head'
import React from 'react'
export default function games() {
    const person =[
        {title:'Pokemon Ash gray Download || cheat codes',url:'/games/',description:'Pokemon Ash gray Download as well as cheat codes of game',imgurl:'https://img.pokemoncoders.com/wp-content/uploads/2018/09/bpg-pokemon-ash-gray.png'},
        {title:'Pokemon Fire red Download || cheat codes',url:'/games/',description:'Pokemon fire red Download as well as cheat codes of game',imgurl:'https://assets-prd.ignimgs.com/2022/01/31/pokemon-firered-button-crop-1643616703712.jpg'},
        {title:'Pokemon Ash version Download || cheat codes ',url:'/games/',description:'Pokemon Ash versionDownload as well as cheat codes of game',imgurl:'https://www.pokeharbor.com/wp-content/uploads/2021/05/picsart-05-27-01-16-46_1-2.png'}, 
        {title:'Pokemon sinnoh legacy Download || cheat codes ',url:'/games/',description:'Pokemon Sinnoh legacy Download as well as cheat codes of game',imgurl:'https://images-na.ssl-images-amazon.com/images/I/91FGGnUq6EL.jpg'},
        {title:'Pokemon kalos Download || cheat codes',url:'/games/',description:'Pokemon Kalos Download as well as cheat codes of game',imgurl:'https://romspure.cc/wp-content/uploads/2021/01/65c0233e01a5488bc410d5515bc22aad.png'},
        {title:'Pokemon Last fire red Download || cheat codes',url:'/games/',description:'Pokemon Last fire red Download as well as cheat codes of game',imgurl:'https://romspure.cc/wp-content/uploads/2021/01/Pokemon-The-Last-Fire-Red.png'},
        {title:'Pokemon Emerald Download || cheat codes',url:'/games/emerald',description:'Pokemon Emerald Download as well as cheat codes of game',imgurl:'https://m.media-amazon.com/images/I/510BNCVM1NL.jpg'},
        {title:'Pokemon Sors Download || cheat codes',url:'/games/',description:'Pokemon Sors Download as well as cheat codes of game',imgurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRgLW63m_LuaW8YefOPadP3AsdThIcds2qFQ&usqp=CAU'},
        {title:'Pokemon dark realm Download || cheat codes',url:'/games/',description:'Pokemon dark realm Download as well as cheat codes of game',imgurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi7XYJexCSzhp4EygKgWuam1F5vr0zVYCUGg&usqp=CAU'},
      ]
  return (
    <>  
    
    <Head>
        <title>pikapkm || Games</title>
        <meta name="description" content="pikapkm more games " />
        <link rel="icon" href="https://c4.wallpaperflare.com/wallpaper/119/552/901/anime-cartoon-pokemon-pikachu-wallpaper-preview.jpg" />
      </Head>
     <div className='d-flex flex-wrap'>
    {person.map((element)=>(
   
  <div class="card text-start" style={{maxWidth:'350px',minWidth:'300px' , marginLeft:'18px',marginTop:'17px'}}>
  <img class="card-img-top"  src={element.imgurl} alt="Title"/>
  <div class="card-body">
    <h4 class="card-title">{element.title}</h4>
    <p class="card-text">{element.description}</p>
   <center> <button className='  btn btn-primary'> <a style={{color:'white' , textDecoration:'none'}}  href={element.url}>Download</a></button></center>
  </div>
</div>
    ))}</div>
   </>
  )
}
