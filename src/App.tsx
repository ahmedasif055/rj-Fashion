import { useMemo, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import Footer from "./Footer";

const App = () => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // ================= ADD TO CART =================

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item._id === product._id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item._id === product._id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });

    toast.success(`${product.title} added to cart!`);
    setCartOpen(true);
  };

  // ================= REMOVE =================

  const removeFromCart = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item._id !== id)
    );

    toast.success("Product removed from cart");
  };

  // ================= INCREASE =================

  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item._id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // ================= DECREASE =================

  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item._id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // ================= FAVORITE =================

  const toggleFavorite = (product) => {
    const alreadyFavorite = favorites.some(
      (item) => item._id === product._id
    );

    if (alreadyFavorite) {
      setFavorites((current) =>
        current.filter((item) => item._id !== product._id)
      );

      toast("Removed from favorites");
    } else {
      setFavorites((current) => [...current, product]);

      toast.success("Added to favorites ❤️");
    }
  };

  // ================= CART TOTAL =================

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );

  // ================= SEARCH =================

  const filteredProducts = useMemo(() => {
    return search;
  }, [search]);

  return (
    <div className="min-h-screen bg-[#0b0618] text-white">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#170b29",
            color: "#fff",
            border: "1px solid rgba(168,85,247,.3)",
          },
        }}
      />

      <Navbar
        cartCount={cartCount}
        favoriteCount={favorites.length}
        search={search}
        setSearch={setSearch}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />

      <Hero
        setSearch={setSearch}
        setCartOpen={setCartOpen}
      />

      <Card
        search={filteredProducts}
        addToCart={addToCart}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
        setSelectedProduct={setSelectedProduct}
      />

      <Footer />

      {/* ================= CART DRAWER ================= */}

      {cartOpen && (
        <>
          <div
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm"
          />

          <div className="fixed right-0 top-0 z-[90] flex h-full w-full max-w-md flex-col border-l border-purple-500/20 bg-[#0d0719] shadow-2xl shadow-purple-950/50">
            
            {/* Cart Header */}

            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-purple-400">
                  Your Shopping
                </p>

                <h2 className="mt-1 text-2xl font-black">
                  Cart
                </h2>
              </div>

              <button
                onClick={() => setCartOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-slate-400 transition hover:bg-red-500/10 hover:text-red-400"
              >
                ×
              </button>
            </div>

            {/* Cart Products */}

            <div className="flex-1 overflow-y-auto p-5">
              {cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-purple-500/10 text-4xl">
                    🛒
                  </div>

                  <h3 className="text-xl font-bold">
                    Your cart is empty
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
                    Add some beautiful products to your cart and they will
                    appear here.
                  </p>

                  <button
                    onClick={() => {
                      setCartOpen(false);
                      document
                        .getElementById("products")
                        ?.scrollIntoView({
                          behavior: "smooth",
                        });
                    }}
                    className="mt-6 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-3 text-sm font-bold shadow-lg shadow-purple-900/30 transition hover:scale-105"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((product) => (
                    <div
                      key={product._id}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <div className="flex gap-4">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="h-20 w-20 rounded-xl object-cover"
                        />

                        <div className="min-w-0 flex-1">
                          <h3 className="line-clamp-1 font-bold text-white">
                            {product.title}
                          </h3>

                          <p className="mt-1 text-lg font-black text-purple-400">
                            ${product.price}
                          </p>

                          <div className="mt-3 flex items-center justify-between">
                            <div className="flex items-center rounded-lg border border-white/10">
                              <button
                                onClick={() =>
                                  decreaseQuantity(product._id)
                                }
                                className="h-8 w-8 text-slate-400 hover:text-white"
                              >
                                −
                              </button>

                              <span className="w-8 text-center text-sm font-bold">
                                {product.quantity}
                              </span>

                              <button
                                onClick={() =>
                                  increaseQuantity(product._id)
                                }
                                className="h-8 w-8 text-slate-400 hover:text-white"
                              >
                                +
                              </button>
                            </div>

                            <button
                              onClick={() =>
                                removeFromCart(product._id)
                              }
                              className="text-xs font-semibold text-red-400 transition hover:text-red-300"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Bottom */}

            {cart.length > 0 && (
              <div className="border-t border-white/10 bg-[#10081d] p-6">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    Total
                  </span>

                  <span className="text-3xl font-black">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() => {
                    toast.success("Checkout feature is ready to connect!");
                  }}
                  className="w-full rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 py-4 font-bold shadow-xl shadow-purple-900/30 transition hover:scale-[1.02]"
                >
                  Proceed to Checkout →
                </button>
              </div>
            )}
          </div>
        </>
      )}

      {/* ================= PRODUCT MODAL ================= */}

      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-5 backdrop-blur-md">
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[30px] border border-purple-500/20 bg-[#10081d] shadow-2xl shadow-purple-950/50">
            
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-xl text-white backdrop-blur-xl transition hover:bg-red-500/20 hover:text-red-400"
            >
              ×
            </button>

            <div className="grid md:grid-cols-2">
              
              <div className="relative h-[400px] md:h-[550px]">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#10081d] via-transparent to-transparent" />
              </div>

              <div className="flex flex-col justify-center p-7 md:p-10">
                <span className="mb-4 w-fit rounded-full bg-purple-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-purple-400">
                  {selectedProduct.category}
                </span>

                <h2 className="text-3xl font-black md:text-4xl">
                  {selectedProduct.title}
                </h2>

                <p className="mt-5 leading-7 text-slate-400">
                  {selectedProduct.description}
                </p>

                <div className="mt-7 flex items-end gap-3">
                  <span className="text-4xl font-black text-white">
                    ${selectedProduct.price}
                  </span>

                  {selectedProduct.oldPrice && (
                    <span className="pb-1 text-lg text-slate-600 line-through">
                      ${selectedProduct.oldPrice}
                    </span>
                  )}
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-slate-600">
                      Brand
                    </p>
                    <p className="mt-1 font-bold">
                      {selectedProduct.brand || "Premium"}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-slate-600">
                      Stock
                    </p>
                    <p className="mt-1 font-bold text-emerald-400">
                      {selectedProduct.stock || "Available"}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    addToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  className="mt-8 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 py-4 font-bold shadow-xl shadow-purple-900/30 transition hover:scale-[1.02]"
                >
                  Add To Cart 🛒
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;