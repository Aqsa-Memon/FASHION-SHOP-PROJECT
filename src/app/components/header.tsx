import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div>
      <header className="bg-green-300 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
         <h1 className="text-5xl font-bold text-green-700">Fashion</h1>
         <nav className="space-x-4">
           <Link href="/">Home</Link>
           <Link href="/shop">Shop</Link>      
           <Link href="/feature">Features</Link>
           <Link href="/contact">Contact</Link>
         <button className="border px-4 py-2 rounded-full">Login</button>
     </nav>
    </div>
  </header>
    </div>
  )
}

export default Header