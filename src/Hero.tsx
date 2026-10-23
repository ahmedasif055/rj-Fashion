import { useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

interface NavbarProps {
  cartCount: number;
  favoriteCount: number;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  setCartOpen: Dispatch<SetStateAction<boolean>>;
  mobileMenu: boolean;
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({
  cartCount,
  favoriteCount,
  search,
  setSearch,
  setCartOpen,
  mobileMenu,
  setMobileMenu,
}: NavbarProps) => {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const closeSearch = (e: MouseEvent) => {
      if (!(e.target instanceof Element) || !e.target.closest(".search-area")) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("click", closeSearch);

    return () => {
      document.removeEventListener("click", closeSearch);
    };
  }, []);

  const scrollTo = (id: string) => {
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

export { Navbar };

import React from "react";

interface HeroProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hero: React.FC<HeroProps> = ({ setSearch, setCartOpen }) => {
  const scrollToProducts = (): void => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0b0618] px-5 pb-16 pt-10"
    >
      <div className="pointer-events-none absolute left-1/4 top-10 h-96 w-96 rounded-full bg-purple-600/20 blur-[130px]" />
      <div className="pointer-events-none absolute right-1/4 top-20 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <span className="inline-block rounded-full border border-purple-500/20 bg-purple-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-purple-300">
          ✦ NEW SEASON 2026
        </span>

        <h1 className="mt-6 text-4xl font-black leading-tight text-white md:text-7xl">
          Elevate Your Everyday{" "}
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
            Fashion
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 md:text-lg">
          Curated luxury apparel and accessories crafted for comfort, confidence
          and timeless style.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={scrollToProducts}
            className="rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-purple-900/30 transition hover:scale-105"
          >
            Explore Collection →
          </button>

          <button
            onClick={() => setCartOpen(true)}
            className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-slate-300 transition hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-white"
          >
            View Cart 🛒
          </button>
        </div>

        {/* Quick Category Filter Tags */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {["All", "men", "women", "kids"].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSearch(cat === "All" ? "" : cat);
                scrollToProducts();
              }}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold capitalize text-slate-400 transition hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-purple-300"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;