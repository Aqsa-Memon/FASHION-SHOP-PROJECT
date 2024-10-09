//Footer
const Footer = () => {
    return (
      <footer className="bg-green-700 text-white py-8">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; 2024 Fashion. All rights reserved.</p>
          <nav className="space-x-4">
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
            <a href="/cookies">Cookies</a>
          </nav>
        </div>
      </footer>
    );
  };

  export default Footer;