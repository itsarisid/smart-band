import { Link } from 'react-router-dom';
import { getRouteByName } from '@app/router';

/**
 * Main site footer with links and branding
 */
function Footer() {
  return (
    <>
      {/* Learn to Code CTA Section */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="relative pt-20 px-4 bg-gray-900/20 overflow-hidden rounded-6xl">
            <div className="text-center md:max-w-xl mx-auto pb-20">
              <span className="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">
                Get your SafeLoop today
              </span>
              <h2 className="font-heading mb-6 text-7xl text-white tracking-8xl">
                Order now and get 10% off
              </h2>
              <a
                className="mb-8 text-gray-300 relative z-10 hover:text-white transition-colors duration-200"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order now
              </a>
              <img
                className="absolute -bottom-24 right-0 z-0"
                src="/images/lines2.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black overflow-hidden">
        <div className="py-24">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-center -m-8 mb-28">
              <div className="w-full md:w-1/2 lg:w-4/12 p-8">
                <div className="md:max-w-xs">
                  <Link
                    to={getRouteByName('home')}
                    className="inline-block mb-7"
                  >
                    <span className="text-2xl font-bold text-white">Safe<span className="text-green-400">Loop</span></span>
                  </Link>
                  <p className="text-gray-400 font-medium">
                    SafeLoop connects parents and children through smart, secure wearable technology. Peace of mind for you, freedom for them.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-2/12 p-8">
                <h3 className="mb-6 text-lg text-white font-medium">About</h3>
                <ul>
                  <li className="mb-2.5">
                    <Link
                      className="inline-block text-lg font-medium text-gray-400 hover:text-white transition duration-300"
                      to={getRouteByName('contact')}
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="mb-2.5">
                    <Link
                      className="inline-block text-lg font-medium text-gray-400 hover:text-white transition duration-300"
                      to={getRouteByName('blog')}
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="mb-2.5">
                    <Link
                      className="inline-block text-lg font-medium text-gray-400 hover:text-white transition duration-300"
                      to={getRouteByName('about')}
                    >
                      Our Story
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 lg:w-2/12 p-8">
                <h3 className="mb-6 text-lg text-white font-medium">Support</h3>
                <ul>
                  <li className="mb-2.5">
                    <Link
                      className="inline-block text-lg font-medium text-gray-400 hover:text-white transition duration-300"
                      to={getRouteByName('contact')}
                    >
                      Help Center
                    </Link>
                  </li>
                  <li className="mb-2.5">
                    <a className="inline-block text-lg font-medium text-gray-400 hover:text-white transition duration-300" href="#">
                      Safety Guide
                    </a>
                  </li>
                  <li className="mb-2.5">
                    <a className="inline-block text-lg font-medium text-gray-400 hover:text-white transition duration-300" href="#">
                      Warranty
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 lg:flex-1 p-8">
                <div className="flex flex-wrap -m-2">
                  <div className="w-full p-2">
                    <a className="block py-5 px-8 bg-gray-900 rounded-full hover:bg-gray-800 transition" href="#">
                      <div className="flex flex-wrap items-center -m-2">
                        <div className="w-auto p-2">
                          <img src="/images/footers/twitter.svg" alt="" className="filter invert" />
                        </div>
                        <div className="flex-1 p-2">
                          <p className="text-white">Follow us on Twitter</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="w-full p-2">
                    <a className="block py-5 px-8 bg-gray-900 rounded-full hover:bg-gray-800 transition" href="#">
                      <div className="flex flex-wrap items-center -m-2">
                        <div className="w-auto p-2">
                          <img src="/images/footers/instagram.svg" alt="" className="filter invert" />
                        </div>
                        <div className="flex-1 p-2">
                          <p className="text-white">Follow us on Instagram</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between -m-2">
              <div className="w-auto p-2">
                <p className="inline-block text-sm font-medium text-gray-500">© {new Date().getFullYear()} SafeLoop Inc.</p>
              </div>
              <div className="w-auto p-2">
                <div className="flex flex-wrap items-center -m-2 sm:-m-7">
                  <div className="w-auto p-2 sm:p-7">
                    <a className="inline-block text-sm text-gray-500 hover:text-white font-medium transition duration-300" href="#">
                      Terms of Use
                    </a>
                  </div>
                  <div className="w-auto p-2 sm:p-7">
                    <a className="inline-block text-sm text-gray-500 hover:text-white font-medium transition duration-300" href="#">
                      Privacy Policy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
