import { Badge } from '@/components/ui/badge';
import { ArrowRight, ShoppingCart } from 'lucide-react';
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

export function Products() {
  return (
    <section className="container mx-auto px-5 py-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold">Popular Categories</h2>
        <Link
          to="/products"
          className="flex items-center gap-2 text-primary hover:underline"
        >
          View All <ArrowRight size={18} />
        </Link>
      </div>
      <div className="grid grid-cols-5">
        {products
          .map((product) => (
            <div className="col-span-1 p-4 relative  border hover:text-primary hover:shadow-md hover:shadow-primary/20 hover:border hover:border-primary transition">
              <Link to="/" key={product.id}>
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
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="">{product.name}</h3>
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
                    <button className="bg-gray-200 p-3 rounded-full">
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))
          .slice(0, 10)}
      </div>
    </section>
  );
}
