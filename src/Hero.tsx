const Hero = ({ setSearch, setCartOpen }) => {
  const scrollToProducts = () => {
    document
      .getElementById("products")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const searchFashion = () => {
    setSearch("fashion");

    setTimeout(() => {
      scrollToProducts();
    }, 100);
  };

  return (
    <section
      id="home"
      className="relative min-h-[650px] overflow-hidden bg-[#0b0618] px-5 py-20 md:px-10 lg:py-28"
    >
      {/* Background Glow */}

      <div className="absolute -left-40 top-10 h-96 w-96 animate-pulse rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="absolute -right-40 top-20 h-96 w-96 animate-pulse rounded-full bg-fuchsia-600/20 blur-[120px]" />

      <div className="absolute bottom-[-150px] left-1/3 h-96 w-96 animate-pulse rounded-full bg-indigo-600/20 blur-[130px]" />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#a855f7 1px, transparent 1px), linear-gradient(90deg, #a855f7 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* LEFT */}

        <div className="text-center lg:text-left">
          <div className="mb-6 inline-flex animate-pulse rounded-full border border-purple-400/20 bg-purple-500/10 px-5 py-2 backdrop-blur-xl">
            <span className="text-xs font-bold tracking-[0.25em] text-purple-300">
              ✦ NEW COLLECTION 2026
            </span>
          </div>

          <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Upgrade Your

            <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Everyday Style
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-400 md:text-lg lg:mx-0">
            Discover premium fashion pieces designed for modern lifestyles.
            Find your perfect style, explore new collections and shop with
            confidence.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <button
              onClick={scrollToProducts}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-purple-900/30 transition duration-300 hover:-translate-y-1 hover:scale-105"
            >
              <span className="relative z-10">
                Shop Collection →
              </span>

              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />
            </button>

            <button
              onClick={searchFashion}
              className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-slate-300 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-white"
            >
              Explore Collection
            </button>
          </div>

          <div className="mx-auto mt-12 flex max-w-md justify-center divide-x divide-white/10 lg:mx-0 lg:justify-start">
            <div className="px-5 text-center lg:text-left">
              <h3 className="text-2xl font-black text-white">
                10K+
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Happy Customers
              </p>
            </div>

            <div className="px-5 text-center lg:text-left">
              <h3 className="text-2xl font-black text-white">
                500+
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Products
              </p>
            </div>

            <div className="px-5 text-center lg:text-left">
              <h3 className="text-2xl font-black text-white">
                4.9
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Rating
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}

        <div className="relative mx-auto h-[450px] w-full max-w-lg">
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-purple-600/30 blur-[100px]" />

          <div className="absolute left-1/2 top-1/2 w-[280px] -translate-x-1/2 -translate-y-1/2 rotate-3 rounded-[30px] border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-purple-950/50 backdrop-blur-2xl transition duration-500 hover:rotate-0 hover:scale-105">
            <div className="relative h-[340px] overflow-hidden rounded-[22px] bg-gradient-to-br from-purple-900 via-[#24113d] to-fuchsia-950">
              <img
                src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=700&q=80"
                alt="Premium Fashion"
                className="relative z-10 h-full w-full object-cover mix-blend-lighten transition duration-700 hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0618] via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 z-20">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-300">
                  Premium
                </p>

                <h3 className="mt-1 text-xl font-black text-white">
                  Urban Collection
                </h3>
              </div>
            </div>

            <div className="flex items-center justify-between px-2 py-4">
              <div>
                <p className="text-xs text-slate-500">
                  Starting from
                </p>

                <p className="text-xl font-black text-white">
                  $49.99
                </p>
              </div>

              <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-bold text-purple-300">
                NEW
              </span>
            </div>
          </div>

          <div className="absolute left-0 top-20 animate-bounce rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 shadow-xl backdrop-blur-xl [animation-duration:4s]">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                ✓
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Quality
                </p>

                <p className="font-bold text-white">
                  Premium
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-16 right-0 animate-bounce rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 shadow-xl backdrop-blur-xl [animation-duration:5s]">
            <div className="flex items-center gap-3">
              <div className="text-xl">
                ⭐
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Customer Rating
                </p>

                <p className="font-bold text-white">
                  4.9 / 5.0
                </p>
              </div>
            </div>
          </div>

          <div className="absolute right-10 top-5 h-3 w-3 animate-ping rounded-full bg-purple-400" />

          <div className="absolute bottom-10 left-10 h-2 w-2 animate-ping rounded-full bg-fuchsia-400 [animation-delay:1s]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;