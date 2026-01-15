import { lazy, Suspense, ReactNode, ComponentType } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Loading from '@components/common/loading';

const HomePage = lazy(() => import('@routes/home'));
const AboutPage = lazy(() => import('@routes/about'));
const PricingPage = lazy(() => import('@routes/pricing'));
const BlogPage = lazy(() => import('@routes/blog'));
const BlogSinglePage = lazy(() => import('@routes/blog-single'));
const ContactPage = lazy(() => import('@routes/contact'));
const LoginPage = lazy(() => import('@routes/login'));
const RegisterPage = lazy(() => import('@routes/register'));

const SuspenseWrapper = ({ children }: { children: ReactNode }) => (
  <Suspense fallback={<Loading fullScreen message="Loading page..." />}>
    {children}
  </Suspense>
);

const createRoute = (path: string, Component: ComponentType, name: string, label: string | null = null, showInNav: boolean = false) => ({
  path,
  name,
  label,
  showInNav,
  element: (
    <SuspenseWrapper>
      <Component />
    </SuspenseWrapper>
  ),
});

const routes = [
  createRoute('/', HomePage, 'home', 'Home', true),
  createRoute('/about', AboutPage, 'about', 'About', true),
  createRoute('/pricing', PricingPage, 'pricing', 'Pricing', true),
  createRoute('/blog', BlogPage, 'blog', 'Blog', true),
  createRoute('/blog/:slug', BlogSinglePage, 'blog-single'),
  createRoute('/contact', ContactPage, 'contact', 'Contact', true),
  createRoute('/login', LoginPage, 'login', 'Login'),
  createRoute('/register', RegisterPage, 'register', 'Register'),
];

export const router = createBrowserRouter(routes);

export const getRouteByName = (name: string) => {
  const route = routes.find(r => r.name === name);
  return route ? route.path : '/';
};

export const generatePath = (name: string, params: Record<string, string> = {}) => {
  let path = getRouteByName(name);
  Object.keys(params).forEach(key => {
    path = path.replace(`:${key}`, params[key]);
  });
  return path;
};

export const getNavigationRoutes = () => {
  return routes.filter(route => route.showInNav).map(route => ({
    to: route.path,
    label: route.label,
    name: route.name
  }));
};