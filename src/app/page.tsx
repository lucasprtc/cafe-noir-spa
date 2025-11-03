
import HomeSection from '@/components/sections/HomeSection';
import Menu from '@/components/sections/Menu';
import Reviews from '@/components/sections/Reviews';
import FindUs from '@/components/sections/FindUs';
import Contact from '@/components/sections/ContactSection';
import IntroLoader from '@/components/sections/IntroLoader';
import { IntroProvider } from '@/contexts/IntroContext';

export default function Home() {
  return (
    <div className="bg-almond">
      <IntroProvider>
        <IntroLoader />
        <HomeSection />
        <Menu />
        <Reviews />
        <FindUs />
        <Contact />
      </IntroProvider>
    </div>
  );
}
