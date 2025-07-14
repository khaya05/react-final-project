import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <div className='relative'>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
