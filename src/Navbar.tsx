import { useEffect, useState } from "react";

const Navbar = ({
  cartCount,
  favoriteCount,
  search,
  setSearch,
  setCartOpen,
  mobileMenu,
  setMobileMenu,
}) => {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const closeSearch = (e) => {
      if (!e.target.closest(".search-area")) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("click", closeSearch);

    return () => {
      document.removeEventListener("click", closeSearch);
    };
  }, []);

  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });

    setMobileMenu(false);
  };

  return (
    <nav className="sticky top-0 z-50 px-4 py-4">
      <div className="mx-auto max-w-[90%]">

        <div className="relative flex items-center justify-between rounded-2xl border border-purple-500/20 bg-[#12091f]/95 px-5 py-4 shadow-xl shadow-purple-950/30 backdrop-blur-xl md:px-8">

          {/* LOGO */}

          <button
            onClick={() => scrollTo("home")}
            className="group flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 text-xl shadow-lg shadow-purple-500/20 transition duration-300 group-hover:rotate-6 group-hover:scale-110">
              🛍️
            </div>

            <div className="text-left">
              <h1 className="text-xl font-black tracking-wide text-white">
                VELORA
              </h1>

              <p className="text-[8px] font-bold tracking-[0.3em] text-purple-400">
                PREMIUM STORE
              </p>
            </div>
          </button>

          {/* DESKTOP MENU */}

          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={() => scrollTo("home")}
              className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-400 transition hover:bg-purple-500/10 hover:text-purple-300"
            >
              Home
            </button>

            <button
              onClick={() => scrollTo("products")}
              className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-400 transition hover:bg-purple-500/10 hover:text-purple-300"
            >
              Products
            </button>

            <button
              onClick={() => scrollTo("collection")}
              className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-400 transition hover:bg-purple-500/10 hover:text-purple-300"
            >
              Collection
            </button>

            <button
              onClick={() => scrollTo("about")}
              className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-400 transition hover:bg-purple-500/10 hover:text-purple-300"
            >
              About
            </button>
          </div>

          {/* RIGHT SIDE */}

          <div className="flex items-center gap-2">

            {/* SEARCH */}

            <div className="search-area relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSearchOpen(!searchOpen);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-slate-400 transition hover:scale-110 hover:bg-purple-500/10 hover:text-purple-300"
              >
                🔍
              </button>

              {searchOpen && (
                <div className="absolute right-0 top-14 w-72 rounded-2xl border border-purple-500/20 bg-[#12091f] p-3 shadow-2xl shadow-purple-950/50">
                  <input
                    autoFocus
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search products..."
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-purple-500/50"
                  />

                  {search && (
                    <button
                      onClick={() => setSearch("")}
                      className="mt-2 text-xs text-purple-400 hover:text-purple-300"
                    >
                      Clear search
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* FAVORITE */}

            <button
              type="button"
              className="relative hidden h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-slate-400 transition hover:scale-110 hover:bg-pink-500/10 hover:text-pink-400 sm:flex"
            >
              ♡

              {favoriteCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-[#12091f] bg-pink-500 px-1 text-[10px] font-black text-white">
                  {favoriteCount}
                </span>
              )}
            </button>

            {/* CART */}

            <button
              onClick={() => setCartOpen(true)}
              className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 text-lg text-white shadow-lg shadow-purple-900/30 transition hover:scale-110 active:scale-95"
            >
              🛒

              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-[#12091f] bg-white px-1 text-[10px] font-black text-purple-700">
                {cartCount}
              </span>
            </button>

            {/* MOBILE BUTTON */}

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-slate-300 transition hover:bg-purple-500/10 hover:text-purple-300 md:hidden"
            >
              {mobileMenu ? "×" : "☰"}
            </button>
          </div>

          {/* MOBILE MENU */}

          {mobileMenu && (
            <div className="absolute left-0 right-0 top-[78px] rounded-2xl border border-purple-500/20 bg-[#12091f] p-4 shadow-2xl shadow-purple-950/50 md:hidden">
              <div className="grid gap-2">
                <button
                  onClick={() => scrollTo("home")}
                  className="rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-300 hover:bg-purple-500/10 hover:text-purple-300"
                >
                  Home
                </button>

                <button
                  onClick={() => scrollTo("products")}
                  className="rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-300 hover:bg-purple-500/10 hover:text-purple-300"
                >
                  Products
                </button>

                <button
                  onClick={() => scrollTo("collection")}
                  className="rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-300 hover:bg-purple-500/10 hover:text-purple-300"
                >
                  Collection
                </button>

                <button
                  onClick={() => scrollTo("about")}
                  className="rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-300 hover:bg-purple-500/10 hover:text-purple-300"
                >
                  About
                </button>

                <button
                  onClick={() => {
                    setCartOpen(true);
                    setMobileMenu(false);
                  }}
                  className="mt-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-4 py-3 text-sm font-bold"
                >
                  Open Cart 🛒 ({cartCount})
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;