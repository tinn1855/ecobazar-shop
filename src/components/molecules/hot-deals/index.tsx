import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { HeadingH2 } from '@/components/ui/heading-h2';
import { HeadingH3 } from '@/components/ui/heading-h3';
import { ArrowRight, Eye, Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Green Apple',
    image: 'green-apple.jpg',
    price: 14.99,
    priceSale: 20.0,
    rate: 4.0,
  },
  {
    id: 2,
    name: 'Fresh Cauliflower',
    image: 'fresh-cauliflower.jpg',
    price: 14.99,
    priceSale: 20.0,
    rate: 4.0,
  },
  {
    id: 3,
    name: 'Chinese cabbage',
    image: 'chinese-cabbage.jpg',
    price: 14.99,
    priceSale: 20.0,
    rate: 4.0,
  },
  {
    id: 4,
    name: 'Green Lettuce',
    image: 'green-lettuce.jpg',
    price: 14.99,
    priceSale: 20.0,
    rate: 4.0,
  },
  {
    id: 5,
    name: 'Eggplant',
    image: 'eggplant.jpg',
    price: 14.99,
    priceSale: 20.0,
    rate: 4.0,
  },
  {
    id: 6,
    name: 'Big Potatoes',
    image: 'big-potatoes.jpg',
    price: 14.99,
    priceSale: 20.0,
    rate: 2.5,
  },
  {
    id: 7,
    name: 'Corn',
    image: 'corn.jpg',
    price: 14.99,
    priceSale: 20.0,
    rate: 4.0,
    sale: '50%',
  },
  {
    id: 7,
    name: 'Corn',
    image: 'corn.jpg',
    price: 14.99,
    priceSale: 20.0,
    rate: 4.0,
    sale: '50%',
  },
  {
    id: 7,
    name: 'Corn',
    image: 'corn.jpg',
    price: 14.99,
    priceSale: 20.0,
    rate: 4.0,
  },
  {
    id: 7,
    name: 'Corn',
    image: 'corn.jpg',
    price: 14.99,
    priceSale: 20.0,
    rate: 3.0,
  },
];

export function HotDeals() {
  return (
    <section className="container mx-auto px-5">
      <div className="flex justify-between">
        <HeadingH2>Hot Deals</HeadingH2>
        <Link
          to="/products"
          className="flex items-center gap-2 text-primary hover:underline"
        >
          View All <ArrowRight size={18} />
        </Link>
      </div>
      <div className="grid grid-cols-5 py-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group col-span-1 hover:col-span-2 hover:row-span-2 p-4 relative border hover:shadow-md hover:shadow-primary/20 hover:border hover:border-primary transition"
          >
            <Link to="/">
              {product.sale && (
                <Badge variant="destructive" className="absolute top-4">
                  Sale {product.sale}
                </Badge>
              )}
              <img
                src={`/img/home/products/${product.image}`}
                alt={product.name}
                className="aspect-square object-contain"
              />
              <div className="hidden group-hover:flex justify-center items-center gap-2 my-4 px-5 transition-all duration-300">
                <div className="p-5 bg-gray-100 rounded-full">
                  <Heart />
                </div>
                <div className="flex-1 grow-0">
                  <Button>
                    Add to Cart
                    <svg
                      width="18"
                      height="17"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.66667 6.83333H3.16667L1.5 16H16.5L14.8333 6.83333H12.3333M5.66667 6.83333V4.33333C5.66667 2.49239 7.15905 1 9 1V1C10.8409 1 12.3333 2.49238 12.3333 4.33333V6.83333M5.66667 6.83333H12.3333M5.66667 6.83333V9.33333M12.3333 6.83333V9.33333"
                        stroke="white"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Button>
                </div>
                <div className="p-5 bg-gray-100 rounded-full">
                  <Eye />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="hover:text-primary">{product.name}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.priceSale && (
                      <span className="line-through text-gray-500">
                        ${product.priceSale.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <div>
                    <span className="text-yellow-500">
                      {'★'.repeat(Math.floor(product.rate))}
                      {'☆'.repeat(5 - Math.floor(product.rate))}
                    </span>
                  </div>
                </div>
                <div>
                  <button
                    title="Add to Cart"
                    className="bg-gray-200 hover:bg-primary hover:text-white p-3 rounded-full"
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
