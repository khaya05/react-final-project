import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../store/cartSlice';
import CartItem from './CartItem';
import { resetAddedToCartState } from '../store/uiSlice';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className='bg-white rounded-xl shadow-md p-6 max-w-md w-full absolute top-[5rem] right-0 text-black'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-xl font-bold tracking-wide'>{`CART (${cartItems.length})`}</h2>
        {cartItems.length > 0 && (
          <button
            onClick={() => {
              dispatch(resetAddedToCartState());
              dispatch(clearCart());
            }}
            className='text-green-500 text-sm hover:underline'
          >
            Remove all
          </button>
        )}
      </div>

      <div className='space-y-4'>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      <div className='flex justify-between items-center mt-6 mb-4'>
        <span className='text-gray-500 font-medium tracking-wide'>TOTAL</span>
        <span className='text-lg font-bold'>R {total}</span>
      </div>

      <button className='w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md font-semibold tracking-wide'>
        CHECKOUT
      </button>
    </div>
  );
}

export default Cart;
