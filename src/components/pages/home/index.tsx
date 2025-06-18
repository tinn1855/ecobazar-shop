import { Header } from '@/components/common/header';
import { NavBar } from '@/components/common/nav-bar';
import { TopBar } from '@/components/common/top-bar';
import { BenefitsSection } from '@/components/molecules/benefits-section';
import { Categories } from '@/components/molecules/categories';
import { HeroSection } from '@/components/molecules/hero-section';
import { Products } from '@/components/molecules/products';

export function Home() {
  return (
    <div>
      <TopBar />
      <div className="border-b-2"></div>
      <Header />
      <NavBar />
      <HeroSection />
      <BenefitsSection />
      <Categories />
      <Products />
    </div>
  );
}
