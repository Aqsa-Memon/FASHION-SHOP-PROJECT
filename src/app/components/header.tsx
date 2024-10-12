import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div>
      <header className="bg-green-300 p-4 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-green-700 mb-4 md:mb-0">Fashion</h1>
          <nav className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <Link href="/" className="text-lg">Home</Link>
            <Link href="/shop" className="text-lg">Shop</Link>
            <Link href="/feature" className="text-lg">Features</Link>
            <Link href="/contact" className="text-lg">Contact</Link>
            <button className="border px-4 py-2 rounded-full mt-2 md:mt-0">Login</button>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
