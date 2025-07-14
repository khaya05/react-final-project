import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';

const SucculentsPage = () => {
  const { plants } = useSelector((state) => state.ui);

  return (
    <>
      <Hero heading='Succulents' />
      <div className='mx-auto max-w-[1110px] grid grid-cols-3 gap-4 mt-4'>
        {plants
          .filter((plant) => plant.category === 'Succulent')
          .map((plant) => (
            <ProductCard key={plant.id} {...plant} />
          ))}
      </div>
    </>
  );
};

export default SucculentsPage;
