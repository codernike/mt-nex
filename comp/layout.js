import React from 'react'
import Footer from './footer'
import Navbar from './navbar'



export default function Layout({ children }) {
    return (
      <>
        <Navbar /> <div className='w-100 img-thumbnail mb-5' style={{backgroundImage:"url('https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F04%2Fpokemon-pikachu-video-chat-backgrounds-download-info-006.jpg')"}}>
        <div class="d-flex flex-column min-vh-100">
    <main class="flex-fill mb-5">
        <main>{children}</main>
        </main></div></div>
        <Footer />
      </>
    )
  }