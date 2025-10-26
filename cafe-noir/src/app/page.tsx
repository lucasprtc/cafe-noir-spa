import HomeSection from '@/components/sections/HomeSection';
import About from '@/components/sections/AboutSection';
import Menu from '@/components/sections/Menu';
import Reviews from '@/components/sections/Reviews';
import FindUs from '@/components/sections/FindUs';
import Contact from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="bg-almond">
      <HomeSection />
      <About />
      <Menu />
      <Reviews />
      <FindUs />
      <Contact />
    </div>
  );
}
