import Banner from "./banner";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Features from "./feature/page";
import FeedbackCorner from "./feedback";
import Products from "./shop/page";



export default function Home() {
  return (
    <div>
     
    <Header />
    <Hero />
    <Products />
    <Features />
    <FeedbackCorner />
    <Banner />
    <Footer  />
    </div>
  );
}
