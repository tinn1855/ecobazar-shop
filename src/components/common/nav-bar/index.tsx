import { ChevronDown, PhoneCall } from 'lucide-react';

export function NavBar() {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-5 py-5 flex justify-between items-center">
        <ul className="flex space-x-8 text-gray-300">
          <li>
            <a href="/" className="flex hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="/design-system" className=" hover:text-white">
              Shop
            </a>
          </li>
          <li>
            <a href="/design-system" className=" hover:text-white">
              Pages
            </a>
          </li>
          <li>
            <a href="/design-system" className=" hover:text-white">
              Blog
            </a>
          </li>
          <li>
            <a href="/design-system" className=" hover:text-white">
              About Us
            </a>
          </li>
          <li>
            <a href="/design-system" className=" hover:text-white">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="text-white flex items-center gap-2">
          <PhoneCall />
          <span className="font-medium">(219) 555-0114</span>
        </div>
      </div>
    </nav>
  );
}
