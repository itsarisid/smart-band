function HeroSection() {
  return (
    <section className="relative pt-20 lg:pt-28">
      <div className="relative z-10 container px-4 mx-auto">
        <div className="relative mb-24 text-center md:max-w-4xl mx-auto">
          <img
            className="absolute top-44 -left-36"
            src="/images/star2.svg"
            alt=""
          />
          <img
            className="absolute top-0 left-0 w-40 -ml-12 -mt-12"
            src="/images/stars.svg"
            alt=""
          />
          <span className="inline-block mb-2.5 text-sm text-green-400 font-medium tracking-tighter">
            Smart Safety for Kids
          </span>
          <h1 className="font-heading mb-10 text-7xl lg:text-8xl xl:text-10xl text-white tracking-tighter">
            Peace of mind, just a tap away
          </h1>
          <a
            className="inline-block px-8 py-4 tracking-tighter bg-green-400 hover:bg-green-500 text-black focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300"
            href="#pricing"
          >
            Get SafeLoop
          </a>
        </div>
        <div className="relative max-w-max mx-auto">
          <img src="/images/safeloop-band.png" alt="SafeLoop Band" />
          <img
            className="absolute top-7 -right-64"
            src="/images/star.svg"
            alt=""
          />
        </div>
      </div>
      <img
        className="absolute bottom-0 right-0"
        src="/images/lines2.svg"
        alt=""
      />
    </section>
  );
}

export default HeroSection;
