import Banner from "./banner";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Products from "./product";



export default function Home() {
  return (
    <div>
     
    <Header />
    <Hero />
    <Products />
    <Banner />
    <Footer  />
    </div>
  );
}
