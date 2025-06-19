import { HeadingH3 } from '@/components/ui/heading-h3';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 1, name: 'Fresh Fruit', image: 'freshfruit.png' },
  { id: 2, name: 'Fresh Vegetables', image: 'vegetables.png' },
  { id: 3, name: 'Meat & Fish', image: 'meatandfish.png' },
  { id: 4, name: 'Snacks', image: 'snack.png' },
  { id: 5, name: 'Beverages', image: 'beverages.png' },
  { id: 6, name: 'Beauty & Health', image: 'beautyandheath.png' },
  { id: 7, name: 'Fresh Fruit', image: 'freshfruit.png' },
  { id: 8, name: 'Fresh Vegetables', image: 'vegetables.png' },
  { id: 9, name: 'Meat & Fish', image: 'meatandfish.png' },
  { id: 10, name: 'Snacks', image: 'snack.png' },
  { id: 11, name: 'Beverages', image: 'beverages.png' },
  { id: 12, name: 'Beauty & Health', image: 'beautyandheath.png' },
  { id: 13, name: 'Beauty & Health', image: 'beautyandheath.png' },
  { id: 14, name: 'Beauty & Health', image: 'beautyandheath.png' },
];

export function Categories() {
  return (
    <section className="container mx-auto px-5 py-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold">Popular Categories</h2>
        <Link to="/categories" className="flex items-center gap-2 text-primary">
          View All <ArrowRight size={18} />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories
          .map((category) => (
            <Link
              to="/"
              key={category.id}
              className="border rounded-lg overflow-hidden p-4 hover:shadow-md hover:shadow-primary/20 hover:border hover:border-primary transition"
            >
              <img
                src={`/img/home/categories/${category.image}`}
                alt={category.name}
                className="w-full object-cover mb-4 rounded"
              />
              <HeadingH3 className="text-center hover:text-primary">
                {category.name}
              </HeadingH3>
            </Link>
          ))
          .slice(0, 12)}
      </div>
    </section>
  );
}
