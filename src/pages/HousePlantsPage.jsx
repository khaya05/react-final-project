import { useSelector } from 'react-redux';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';

const HousePlantsPage = () => {
  const { plants } = useSelector((state) => state.ui);

  return (
    <>
      <Hero heading='House Plants' />
      <div className='mx-auto max-w-[1110px] grid grid-cols-3 gap-4 mt-4'>
        {plants
          .filter((plant) => plant.category === 'Houseplant')
          .map((plant) => (
            <ProductCard key={plant.id} {...plant} />
          ))}
      </div>
    </>
  );
};

export default HousePlantsPage;
