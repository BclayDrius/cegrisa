import Hero from '../components/Hero';
import Catalog from '../components/Catalog';
import PromoBanners from '../components/PromoBanners';
import Features from '../components/Features';
import Products from '../components/Products';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Catalog />
      <PromoBanners />
      <Features />
      <Products />
      <Contact />
    </>
  );
}
