import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="container mx-auto px-5 py-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className="relative h-[600px] w-full rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('/img/home/banner.jpg')] bg-cover rounded-xl" />
            <div className="relative z-10 px-16 h-full flex items-center text-white space-y-7">
              <div className="space-y-7">
                <h1 className="font-semibold text-5xl w-2/3">
                  Fresh & Healthy Organic Food
                </h1>
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
                      <span className="bg-orange-400 rounded-md px-3 py-1">
                        30% OFF
                      </span>
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
              <h2 className="font-medium tracking-wide">SUMMER SALE</h2>
              <p className="text-3xl font-bold">75% OFF</p>
              <p>Only Fruit & Vegetable</p>
              <Button variant={'secondary'}>
                Shop now <ArrowRight />{' '}
              </Button>
            </div>
          </div>
          <div className="bg-[url('/img/home/banner-3.jpg')] h-1/2 bg-cover flex items-center justify-center rounded-xl">
            <div className="text-white text-center p-8 space-y-3">
              <span className="font-medium tracking-wide">BEST DEAL</span>
              <h2 className="font-semibold text-3xl">
                Special Products Deal of the Month
              </h2>
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
