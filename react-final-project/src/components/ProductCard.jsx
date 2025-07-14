import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { toggleAddToCartBtn } from '../store/uiSlice';

function ProductCard({
  id,
  name,
  description,
  category,
  price,
  isOnSale,
  img,
  addedToCart,
}) {
  const dispatch = useDispatch();

  return (
    <div className='bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform hover:scale-105 hover:shadow-xl'>
      <img
        src={img}
        alt={name}
        className='w-full h-48 object-cover'
        loading='lazy'
      />

      <div className='p-4 flex flex-col flex-1'>
        <h2 className='text-xl font-semibold text-green-800'>{name}</h2>
        <p className='text-sm text-gray-500 mb-2'>{category}</p>

        <p className='text-gray-700 text-sm flex-1'>{description}</p>

        <div className='mt-4 flex items-center justify-between'>
          <span className='text-lg font-bold text-green-700'>
            R&nbsp;{price.toFixed(2)}
          </span>
          {isOnSale && (
            <span className='text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full'>
              On&nbsp;Sale
            </span>
          )}
        </div>

        <button
          onClick={() => {
            dispatch(toggleAddToCartBtn(id));
            dispatch(addToCart({ id, name, price, img }));
          }}
          className={`
          mt-4 w-full 
          text-white 
          py-2 
          rounded-xl 
          font-medium 
          focus:outline-none 
          ${!addedToCart ? 'bg-green-600' : 'bg-gray-400'} 
          ${!addedToCart ? 'cursor-pointer' : 'cursor-not-allowed'} 
          ${!addedToCart ? 'hover:bg-green-700 ' : 'bg-gray-400'} 
          `}
        >
          {!addedToCart ? 'Add to Cart' : 'Added to Cart'}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
