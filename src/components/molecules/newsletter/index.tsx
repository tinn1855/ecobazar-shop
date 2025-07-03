import { Button } from '@/components/ui/button';
import { HeadingH3 } from '@/components/ui/heading-h3';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Newsletter() {
  return (
    <section aria-labelledby="newsletter-heading" className="bg-gray-100">
      <div className="container mx-auto px-5 py-10 flex gap-28 items-center justify-between">
        <section className="w-2/5">
          <h2 className="font-semibold text-2xl">
            Subscribe to our Newsletter
          </h2>
          <p className="text-gray mt-2">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna.
          </p>
        </section>
        <section className="w-3/5 flex  gap-4">
          <form className="relative w-full md:w-3/4 text-gray">
            <Input
              id="newsletter-email"
              type="email"
              placeholder="Your email address"
              className="px-5 text-gray"
            />
            <Button type="submit" className="absolute right-0 top-0 ">
              Subscribe
            </Button>
          </form>

          <div>
            <nav aria-label="Social media" className="flex gap-3">
              <button
                aria-label="Facebook"
                className="hover:bg-primary hover:text-white rounded-full p-3"
              >
                <Facebook />
              </button>
              <button
                aria-label="Twitter"
                className="hover:bg-primary hover:text-white rounded-full p-3"
              >
                <Twitter />
              </button>
              <button
                aria-label="Another Facebook"
                className="hover:bg-primary hover:text-white rounded-full p-3"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.24471 0C4.31136 0 1.68774 3.16139 1.68774 6.60855C1.68774 8.20724 2.58103 10.2008 4.01097 10.8331C4.22811 10.931 4.34624 10.8894 4.39462 10.688C4.43737 10.535 4.62525 9.79807 4.71638 9.45042C4.74451 9.33904 4.72988 9.24229 4.63988 9.13766C4.16511 8.58864 3.78821 7.58847 3.78821 6.65017C3.78821 4.24594 5.69967 1.91146 8.9522 1.91146C11.7648 1.91146 13.7325 3.73854 13.7325 6.35204C13.7325 9.30529 12.1698 11.3484 10.1391 11.3484C9.0152 11.3484 8.17816 10.4663 8.44367 9.37505C8.76431 8.07561 9.39321 6.6783 9.39321 5.74113C9.39321 4.90072 8.91844 4.20544 7.94865 4.20544C6.80447 4.20544 5.87631 5.33837 5.87631 6.85943C5.87631 7.82585 6.21832 8.47838 6.21832 8.47838C6.21832 8.47838 5.08652 13.0506 4.87614 13.9045C4.52062 15.3502 4.92451 17.6914 4.95939 17.8928C4.98077 18.0042 5.10565 18.0391 5.1754 17.9479C5.28678 17.8017 6.65484 15.8497 7.03848 14.4389C7.17799 13.9248 7.75064 11.84 7.75064 11.84C8.12753 12.5207 9.21546 13.0911 10.3743 13.0911C13.8214 13.0911 16.3123 10.0613 16.3123 6.30141C16.2999 2.69675 13.215 0 9.24471 0Z"
                    fill="#4D4D4D"
                  />
                </svg>
              </button>
              <button
                aria-label="Another Facebook"
                className="hover:bg-primary hover:text-white rounded-full p-3"
              >
                <Instagram />
              </button>
            </nav>
          </div>
        </section>
      </div>
    </section>
  );
}
