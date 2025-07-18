import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../ui/ScrollToTop';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <main className="flex-grow pt-24">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;