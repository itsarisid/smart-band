import { useEffect, ReactNode } from 'react';
import Header from './header';
import Footer from './footer';
import TopBar from '@components/common/top-bar';

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  showTopBar?: boolean;
  className?: string;
}

function PageLayout({ children, title, showTopBar = false, className = '' }: PageLayoutProps) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  return (
    <div className={`antialiased bg-body text-body font-body ${className}`}>
      <div className="relative">
        <img
          className="absolute top-4 left-0 md:top-10 md:left-20 z-0"
          src="/images/layer-blur.svg"
          alt=""
        />
        {showTopBar && <TopBar />}
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default PageLayout;
