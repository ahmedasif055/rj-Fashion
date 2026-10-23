import { useState } from "react";
import { toast } from "react-hot-toast";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Please enter a valid email");
      return;
    }

    toast.success("Successfully subscribed! 🎉");
    setEmail("");
  };

  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      id="about"
      className="relative overflow-hidden bg-[#080411] text-white"
    >
      {/* GLOW */}

      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 animate-pulse rounded-full bg-purple-600/15 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 animate-pulse rounded-full bg-fuchsia-600/15 blur-[120px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[120px]" />

      {/* CTA */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-20">
        <div className="relative overflow-hidden rounded-[32px] border border-purple-500/20 bg-gradient-to-br from-purple-900/30 via-[#170b29] to-fuchsia-900/20 p-8 shadow-2xl shadow-purple-950/30 md:p-12">
          
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-fuchsia-500/20 blur-[80px]" />

          <div className="relative flex flex-col items-center justify-between gap-8 md:flex-row">
            
            <div className="max-w-xl text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-purple-400">
                Stay In Style
              </span>

              <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
                Get the latest{" "}
                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                  fashion updates
                </span>
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                Subscribe to our newsletter and get exclusive offers,
                new collection updates and special discounts.
              </p>
            </div>

            {/* NEWSLETTER */}

            <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubscribe();
                  }
                }}
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/10"
              />

              <button
                onClick={handleSubscribe}
                className="rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-purple-900/30 transition duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}

          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 via-fuchsia-600 to-indigo-600 text-xl shadow-lg shadow-purple-500/20 transition duration-500 hover:rotate-6 hover:scale-110">
                🛍️
              </div>

              <div>
                <h2 className="text-xl font-black tracking-wide">
                  VELORA
                </h2>

                <p className="text-[8px] font-bold tracking-[0.3em] text-purple-400">
                  PREMIUM STORE
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-xs text-sm leading-7 text-slate-500">
              Modern fashion for modern people. Discover premium
              collections designed to make your everyday style stand out.
            </p>

            {/* SOCIAL */}

            <div className="mt-6 flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-bold text-slate-400 transition hover:-translate-y-1 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-300"
              >
                f
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-bold text-slate-400 transition hover:-translate-y-1 hover:border-fuchsia-500/30 hover:bg-fuchsia-500/10 hover:text-fuchsia-300"
              >
                ◎
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-bold text-slate-400 transition hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-indigo-300"
              >
                X
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-bold text-slate-400 transition hover:-translate-y-1 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-300"
              >
                in
              </a>
            </div>
          </div>

          {/* SHOP */}

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Shop
            </h3>

            <div className="mt-6 space-y-4">
              <button
                onClick={() => scrollTo("products")}
                className="block text-sm text-slate-500 transition hover:translate-x-2 hover:text-purple-300"
              >
                All Products
              </button>

              <button
                onClick={() => scrollTo("collection")}
                className="block text-sm text-slate-500 transition hover:translate-x-2 hover:text-purple-300"
              >
                New Collection
              </button>

              <button
                onClick={() => scrollTo("products")}
                className="block text-sm text-slate-500 transition hover:translate-x-2 hover:text-purple-300"
              >
                Best Sellers
              </button>

              <button
                onClick={() => scrollTo("products")}
                className="block text-sm text-slate-500 transition hover:translate-x-2 hover:text-purple-300"
              >
                Special Offers
              </button>
            </div>
          </div>

          {/* COMPANY */}

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Company
            </h3>

            <div className="mt-6 space-y-4">
              <button
                onClick={() => scrollTo("about")}
                className="block text-sm text-slate-500 transition hover:translate-x-2 hover:text-purple-300"
              >
                About Us
              </button>

              <button
                onClick={() => toast("VELORA started in 2026 🚀")}
                className="block text-sm text-slate-500 transition hover:translate-x-2 hover:text-purple-300"
              >
                Our Story
              </button>

              <button
                onClick={() => toast("Careers page coming soon!")}
                className="block text-sm text-slate-500 transition hover:translate-x-2 hover:text-purple-300"
              >
                Careers
              </button>

              <button
                onClick={() => toast("Contact: support@velora.com")}
                className="block text-sm text-slate-500 transition hover:translate-x-2 hover:text-purple-300"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* SUPPORT */}

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Support
            </h3>

            <div className="mt-6 space-y-4">
              <button
                onClick={() => toast("Shipping usually takes 3-7 days.")}
                className="block text-sm text-slate-500 transition hover:translate-x-2 hover:text-purple-300"
              >
                Shipping & Delivery
              </button>

              <button
                onClick={() => toast("30-day return policy available.")}
                className="block text-sm text-slate-500 transition hover:translate-x-2 hover:text-purple-300"
              >
                Return Policy
              </button>

              <button
                onClick={() => toast("Your privacy is important to us.")}
                className="block text-sm text-slate-500 transition hover:translate-x-2 hover:text-purple-300"
              >
                Privacy Policy
              </button>

              <button
                onClick={() => toast("Terms & Conditions coming soon.")}
                className="block text-sm text-slate-500 transition hover:translate-x-2 hover:text-purple-300"
              >
                Terms & Conditions
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DIVIDER */}

      <div className="mx-auto max-w-7xl px-5">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      </div>

      {/* BOTTOM */}

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-7 text-center md:flex-row md:text-left">
        <p className="text-xs text-slate-600">
          © 2026 VELORA. All rights reserved.
        </p>

        <div className="flex items-center gap-5 text-xs text-slate-600">
          <button
            onClick={() => toast("Privacy Policy")}
            className="transition hover:text-purple-300"
          >
            Privacy
          </button>

          <button
            onClick={() => toast("Terms & Conditions")}
            className="transition hover:text-purple-300"
          >
            Terms
          </button>

          <button
            onClick={() => toast("Cookie settings")}
            className="transition hover:text-purple-300"
          >
            Cookies
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;