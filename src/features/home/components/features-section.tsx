import featuresData from '@data/features.json';

function FeaturesSection() {
  if (!featuresData) {
    return null;
  }

  const brandLogos = featuresData.brandLogos;

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="mb-20 md:max-w-xl text-center mx-auto">
          <span className="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">
            Core Technology
          </span>
          <h2 className="font-heading text-6xl lg:text-7xl text-white tracking-tighter-xl">
            Built for Safety
          </h2>
        </div>
        <div className="relative mb-10 py-20 px-16 bg-gradient-radial-dark overflow-hidden border border-gray-900/30 rounded-5xl">
          <div className="max-w-6xl mx-auto">
            <div className="relative z-10 flex flex-wrap items-center -m-8">
              <div className="w-full md:w-1/2 p-8">
                <div className="max-w-md mx-auto text-center">
                  <h2 className="mb-6 text-6xl text-white tracking-tighter-xl">
                    Live GPS Tracking
                  </h2>
                  <p className="text-white text-opacity-60">
                    Know their location in real-time with our precision GPS technology. Set up safe zones and get notified instantly if they wander too far.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-8">
                <img
                  className="mx-auto md:mr-0"
                  src="/images/feature-gps.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <img
            className="absolute bottom-0 left-0"
            src="/images/bg-gray.png"
            alt=""
          />
        </div>
        <div className="flex flex-wrap -m-5">
          <div className="w-full md:w-1/2 p-5">
            <div className="relative px-16 pt-14 pb-16 h-full bg-gradient-radial-dark overflow-hidden border border-gray-900/30 rounded-5xl">
              <img className="mb-14 rounded-3xl" src="/images/feature-durability.png" alt="" />
              <div className="relative z-10 max-w-sm text-center mx-auto">
                <h2 className="mb-6 text-6xl text-white tracking-tighter">
                  Kid-Proof Durability
                </h2>
                <p className="text-white text-opacity-60">
                  Built to withstand playtime, swimming, and adventures. IP68 water resistance and shock-proof design mean you don't have to worry.
                </p>
              </div>
              <img
                className="absolute bottom-0 right-0"
                src="/images/bg-gray-2.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 p-5">
            <div className="relative px-16 pt-14 pb-16 h-full bg-gradient-radial-dark overflow-hidden border border-gray-900/30 rounded-5xl">
              <div className="mb-14 max-w-sm mx-auto">
                <div className="flex flex-wrap justify-center">
                  {brandLogos.map((logo, index) => (
                    <div key={index} className="w-auto p-2">
                      <div className="flex items-center justify-center w-24 h-24 bg-gradient-radial-dark border border-gray-900/30 rounded-5xl">
                        <img src={logo} alt="" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative z-10 max-w-sm text-center mx-auto">
                <h2 className="mb-6 text-6xl text-white tracking-tighter">
                  Worldwide Coverage
                </h2>
                <p className="text-white text-opacity-60">
                  Whether on vacation or at home, SafeLoop works globally. Our seamless network keeping you connected wherever life takes you.
                </p>
              </div>
              <img
                className="absolute bottom-0 right-0"
                src="/images/bg-gray-2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
