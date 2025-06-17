import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, Search, ShoppingBag, Tally1 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="container mx-auto px-5 py-7 text-sm">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img src="/src/assets/img/logo.png" alt="" />
        </Link>
        {/* <div className="flex items-center ">
          <Search />
          <Input type="text" placeholder="Search" className="" />
          <Button>Search</Button>
        </div> */}
        <div className="border flex items-center rounded-lg pl-4 w-1/3">
          <Search />
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none px-2"
          />
          <button className="bg-primary text-white px-5 py-3 rounded-r-lg">
            Search
          </button>
        </div>
        <div className="flex items-center gap-4">
          <Heart size="32" />
          <span>|</span>
          <div className="flex items-center gap-3">
            <ShoppingBag size="32" />
            <div>
              <p>Shopping Cart:</p>
              <strong>$57.00</strong>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
