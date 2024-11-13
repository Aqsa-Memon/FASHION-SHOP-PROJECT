import Link from "next/link";

// Footer
const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        <p>&copy; 2024 Fashion. All rights reserved.</p>
        
        <nav className="flex flex-wrap justify-center space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/shop" className="hover:underline">Shop</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/feature" className="hover:underline">Features</Link>
          <Link href="/terms" className="hover:underline">Terms</Link>
          <Link href="/privacy" className="hover:underline">Privacy</Link>
          <Link href="/cookies" className="hover:underline">Cookies</Link>
        </nav>
      
      </div>
    </footer>
  );
};

export default Footer;
