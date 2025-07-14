import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { toggleCart } from '../store/uiSlice';
import Cart from './Cart';

const Navbar = () => {
  const dispatch = useDispatch();
  const { isCartShowing } = useSelector((state) => state.ui);
  const cartItems = useSelector((state) => state.cart);
  return (
    <nav className='bg-green-600 text-white p-4'>
      {isCartShowing && (
        <div
          className='bg-black absolute opacity-50 top-[5rem] right-0 w-full h-full z-0'
          onClick={() => dispatch(toggleCart())}
        ></div>
      )}
      <div className='nav-container flex justify-between items-center max-w-[1110px] mx-auto h-12 relative'>
        <Link to='/' className='font-bold text-2xl'>
          Botaniq
        </Link>
        <div className='flex justify-center items-center gap-6'>
          <Link
            to='/products'
            className={({ isActive }) =>
              `relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left ${
                isActive ? 'font-bold underline after:scale-x-100' : ''
              }`
            }
          >
            Products
          </Link>
          <Link
            to='/products/house-plants'
            className={({ isActive }) =>
              isActive ? 'font-bold underline' : ''
            }
          >
            House Plants
          </Link>
          <Link
            to='/products/succulents'
            className={({ isActive }) =>
              isActive ? 'font-bold underline' : ''
            }
          >
            Succulents
          </Link>
          <Link
            to='/products/flowers'
            className={({ isActive }) =>
              isActive ? 'font-bold underline' : ''
            }
          >
            Flowers
          </Link>
        </div>
        <button
          className='flex relative'
          onClick={() => dispatch(toggleCart())}
        >
          <img src='/assets/cart.svg' alt='cart-icon' className='h-full w-8' />
          <p className='absolute bottom-4 left-6 bg-white rounded-full w-6 h-6 text-center text-green-500 font-bold'>
            {cartItems.length}
          </p>
        </button>

        {isCartShowing && <Cart />}
      </div>
    </nav>
  );
};

export default Navbar;
