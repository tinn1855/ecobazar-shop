import { Header } from '@/components/common/header';
import { NavBar } from '@/components/common/nav-bar';
import { TopBar } from '@/components/common/top-bar';
import { HeroSection } from '@/components/molecules/hero-section';

export function Home() {
  return (
    <div>
      <TopBar />
      <div className="border-b-2"></div>
      <Header />
      <NavBar />
      <HeroSection />
    </div>
  );
}
