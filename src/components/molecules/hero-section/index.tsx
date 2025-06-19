import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { HeadingH1 } from '@/components/ui/heading-h1';
import { HeadingH2 } from '@/components/ui/heading-h2';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className=" py-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className="relative h-[600px] w-full rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('/img/home/banner.jpg')] bg-cover rounded-xl" />
            <div className="relative z-10 px-16 h-full flex items-center text-white space-y-7">
              <div className="space-y-7">
                <HeadingH1 className="w-2/3">
                  Fresh & Healthy Organic Food
                </HeadingH1>
                <div className="flex items-center gap-3">
                  <svg
                    width="3"
                    height="65"
                    viewBox="0 0 3 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="0.5" width="2" height="65" fill="#84D187" />
                  </svg>
                  <div className="space-y-2">
                    <p className="text-xl font-semibold">
                      Sale up to{' '}
                      <Badge
                        variant={'orange'}
                        className="text-xl font-semibold"
                      >
                        30% OFF
                      </Badge>
                    </p>
                    <p>Free shipping on all your order.</p>
                  </div>
                </div>
                <Button variant="secondary">
                  Shop now <ArrowRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <div className="relative h-1/2 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('/img/home/banner-2.jpg')] bg-cover scale-x-[-1]" />
            <div className="relative z-10 p-8 space-y-3 ">
              <p className="font-medium tracking-wide">SUMMER SALE</p>
              <HeadingH2>75% OFF</HeadingH2>
              <p>Only Fruit & Vegetable</p>
              <Button variant={'secondary'}>
                Shop now <ArrowRight />{' '}
              </Button>
            </div>
          </div>
          <div className="bg-[url('/img/home/banner-3.jpg')] relative h-1/2 bg-cover flex items-center justify-center rounded-xl">
            <div className="bg-[#002603CC] w-full h-full rounded-xl absolute opacity-80"></div>
            <div className="text-white relative text-center p-10 space-y-3">
              <span className="font-medium tracking-wide">BEST DEAL</span>
              <HeadingH2>Special Products Deal of the Month</HeadingH2>
              <Button variant={'secondary'}>
                Shop Now <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
