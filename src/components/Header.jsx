import { Link } from 'react-router';

const Header = () => {
  return (
    <>
      <div className='bg-black absolute opacity-50 top-[5rem] right-0 w-full h-[calc(100vh-5rem)] z-0'></div>
      <header
        className="
        z-10 
        flex 
        flex-col 
        items-start
        justify-center 
        bg-cover bg-center 
        h-[calc(100vh-5rem)]
        bg-[url('/assets/plants-bg-1.jpg')]
      "
      >
        <div className='relative z-20 text-white text-center max-w-md mx-auto px-4'>
          <p className='text-2xl mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            aliquid, suscipit qui quas labore saepe beatae minus sint! Rerum,
            mollitia!
          </p>
          <Link
            to='/products'
            className='bg-green-500 p-2 rounded-sm inline-block hover:bg-green-600'
          >
            Products
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
