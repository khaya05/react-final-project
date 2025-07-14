import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity } from '../store/cartSlice';
import { toggleAddToCartBtn } from '../store/uiSlice';

function CartItem({ id, name, price, qty, img }) {
  const dispatch = useDispatch();

  return (
    <div className='flex items-center justify-between mb-4'>
      <div className='flex items-center gap-4'>
        <img
          src={img}
          alt={name}
          className='w-16 h-16 rounded-lg object-cover'
        />
        <div>
          <h3 className='font-semibold text-sm'>{name}</h3>
          <p className='text-gray-500 text-sm'>R {(price * qty).toFixed(2)}</p>
        </div>
      </div>

      <div className='flex items-center bg-gray-100 px-2 rounded-md'>
        <button
          onClick={() => {
            dispatch(toggleAddToCartBtn(id));
            dispatch(decreaseQuantity(id));
          }}
          className='text-lg px-2 text-gray-500 hover:text-black'
        >
          –
        </button>
        <span className='px-2 font-medium'>{qty}</span>
        <button
          onClick={() => dispatch(increaseQuantity(id))}
          className='text-lg px-2 text-gray-500 hover:text-black'
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;
