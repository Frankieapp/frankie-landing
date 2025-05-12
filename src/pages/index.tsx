import Header from "../components/header";
import Hero from "../components/hero";
import HowItWorks from "../components/howitworks";
import WhyFrankie from "../components/whyfrankie";
import FAQs from "../components/faq";
import FinalCTA from "../components/finalcta";
import Footer from "../components/footer";


export default function Home() {
  return (
    <main className="bg-[#FFF8F6] text-[#2B2B2B]">
      <Header />
      <Hero />
      <HowItWorks />
      <WhyFrankie />
      <FAQs />
      <FinalCTA />
      <Footer />
    </main>
  );
}
