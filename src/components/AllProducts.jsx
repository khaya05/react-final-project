import { useSelector } from 'react-redux';
import Hero from './Hero';
import ProductCard from './ProductCard';

const AllProducts = () => {
  const { plants } = useSelector((state) => state.ui);

  return (
    <section>
      <Hero heading='all products' />
      <div className='mx-auto max-w-[1110px] grid grid-cols-3 gap-4 mt-4'>
        {plants.map((plant) => {
          return <ProductCard key={plant.id} {...plant} />;
        })}
      </div>
    </section>
  );
};

export default AllProducts;
