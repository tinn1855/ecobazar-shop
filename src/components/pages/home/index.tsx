import { Footer } from '@/components/common/footer';
import { Header } from '@/components/common/header';
import { NavBar } from '@/components/common/nav-bar';
import { TopBar } from '@/components/common/top-bar';
import { BenefitsSection } from '@/components/molecules/benefits-section';
import { Categories } from '@/components/molecules/categories';
import { HeroSection } from '@/components/molecules/hero-section';
import { HotDeals } from '@/components/molecules/hot-deals';
import { Newsletter } from '@/components/molecules/newsletter';
import { Products } from '@/components/molecules/products';
import { PromotionsSection } from '@/components/molecules/promotions-section';

export function Home() {
  return (
    <div>
      <TopBar />
      <div className="border-b-2"></div>
      <Header />
      <NavBar />
      <div className="container mx-auto px-5">
        <HeroSection />
        <BenefitsSection />
        <Categories />
        <Products />
        <PromotionsSection />
      </div>
      {/* <div className="bg-gray">
        <HotDeals />
      </div> */}
      <Newsletter />
      <Footer />
    </div>
  );
}
