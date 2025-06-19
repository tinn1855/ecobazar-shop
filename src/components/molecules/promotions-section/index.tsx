import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { HeadingH2 } from '@/components/ui/heading-h2';
import { ArrowRight } from 'lucide-react';

export function PromotionsSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
      <div className="bg-[url('/img/home/promotions/banner-1.png')] bg-cover bg-center rounded-xl w-full h-[536px]">
        <div className="text-white text-center space-y-2 p-9">
          <span>BEST DEALS</span>
          <HeadingH2>Sale of the Month</HeadingH2>
          <div className="flex gap-2 text-center justify-center">
            <div>
              <p className="text-2xl">00</p>
              <p className="text-xs">DAYS</p>
            </div>
            <span className="text-2xl">:</span>
            <div>
              <p className="text-2xl">02</p>
              <p className="text-xs">HOURS</p>
            </div>
            <span className="text-2xl">:</span>
            <div>
              <p className="text-2xl">18</p>
              <p className="text-xs">MINS</p>
            </div>
            <span className="text-2xl">:</span>
            <div>
              <p className="text-2xl">46</p>
              <p className="text-xs">SECS</p>
            </div>
          </div>
          <Button variant={'secondary'} className="mt-4">
            Shop Now <ArrowRight />
          </Button>
        </div>
      </div>
      <div className="bg-[url('/img/home/promotions/banner-2.png')] bg-cover bg-center rounded-xl w-full h-[536px]">
        <div className="text-white text-center space-y-2 p-9">
          <span>85% FAT FREE</span>
          <HeadingH2>Low-Fat Meat</HeadingH2>
          <div className="flex gap-2 text-center justify-center">
            <p className="text-lg ">
              Started at{' '}
              <span className="text-orange text-xl font-semibold ">$79.99</span>{' '}
            </p>
          </div>
          <Button variant={'secondary'} className="mt-4">
            Shop Now <ArrowRight />
          </Button>
        </div>
      </div>
      <div className="bg-[url('/img/home/promotions/banner-3.png')] bg-cover bg-center rounded-xl w-full h-[536px]">
        <div className=" text-center space-y-2 p-9">
          <span>SUMMER SALE</span>
          <HeadingH2>100% Fresh Fruit</HeadingH2>
          <div className="flex gap-2 text-center justify-center">
            <p className="text-lg ">
              Up to{' '}
              <Badge
                variant={'black'}
                className="text-yellow-400 text-lg font-semibold "
              >
                64% OFF
              </Badge>{' '}
            </p>
          </div>
          <Button variant={'secondary'} className="mt-4">
            Shop Now <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
