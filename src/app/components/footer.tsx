import Link from "next/link";

//Footer
const Footer = () => {
    return (
      <footer className="bg-green-700 text-white py-8">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; 2024 Fashion. All rights reserved.</p>
          <nav className="space-x-4">
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/cookies">Cookies</Link>
          </nav>
        </div>
      </footer>
    );
  };

  export default Footer;