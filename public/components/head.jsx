import React from 'react'
import Link from 'next/link'

export default function HEADER() {
  return (
    <header className="head flex items-center " style={{ overflow: "hidden",position:'fixed',top:0 }}>
  <div className="container mx-auto px-12 flex flex-row items-center justify-between ">
    <div className="flex flex-row gap-8 items-center w-fit">
      <Link href="/">
      <img src="/bmwlogo.png" alt="logo"></img>
      </Link>
      <ul className="flex flex-row gap-4 hidden lg:flex" style={{ listStyle: "none", width: 'fit-content' }}>
        <li>Home</li>
        <li>      <Link href="/V8">
Engine      </Link>
</li>
        <li >Electric Future</li>
        <li >Circular World</li>
      </ul>
    </div>
    <button style={{ padding: "4px 48px" }} className=" rounded-3xl h-fit  border-2 border-slate-100 hidden lg:block">Book Test Drive</button>
    <div className="block lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
      </svg>
    </div>
  </div>
</header>
  )
}
