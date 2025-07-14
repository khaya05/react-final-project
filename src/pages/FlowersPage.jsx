import { useSelector } from 'react-redux';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';

const FlowersPage = () => {
  const { plants } = useSelector((state) => state.ui);

  return (
    <>
      <Hero heading='flowering plants' />
      <div className='mx-auto max-w-[1110px] grid grid-cols-3 gap-4 mt-4'>
        {plants
          .filter((plant) => plant.category === 'Flowering Plant')
          .map((plant) => (
            <ProductCard key={plant.id} {...plant} />
          ))}
      </div>
    </>
  );
};

export default FlowersPage;
