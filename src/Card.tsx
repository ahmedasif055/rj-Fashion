import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const Card = ({
  search,
  addToCart,
  toggleFavorite,
  favorites,
  setSelectedProduct,
}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          "https://fakestoreapi.noksha.dev/api/products"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await res.json();

        setProducts(data.data || []);
      } catch (err) {
        setError("Products load করা যাচ্ছে না। আবার চেষ্টা করুন।");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  // ================= SEARCH =================

  const filteredProducts = products.filter((product) => {
    const keyword = search.toLowerCase().trim();

    if (!keyword) return true;

    return (
      product.title?.toLowerCase().includes(keyword) ||
      product.category?.toLowerCase().includes(keyword) ||
      product.brand?.toLowerCase().includes(keyword) ||
      product.description?.toLowerCase().includes(keyword)
    );
  });

  // ================= LOADING =================

  if (loading) {
    return (
      <section
        id="products"
        className="min-h-screen bg-[#0b0618] px-5 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <div className="mx-auto h-5 w-48 animate-pulse rounded-full bg-purple-500/10" />

            <div className="mx-auto mt-5 h-12 max-w-md animate-pulse rounded-xl bg-white/5" />
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04]"
              >
                <div className="h-72 animate-pulse bg-white/5" />

                <div className="space-y-4 p-5">
                  <div className="h-3 w-24 animate-pulse rounded bg-white/10" />
                  <div className="h-6 w-3/4 animate-pulse rounded bg-white/10" />
                  <div className="h-10 animate-pulse rounded bg-white/5" />
                  <div className="h-12 animate-pulse rounded bg-white/5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ================= ERROR =================

  if (error) {
    return (
      <section
        id="products"
        className="flex min-h-[500px] items-center justify-center bg-[#0b0618] px-5"
      >
        <div className="text-center">
          <div className="text-5xl">
            ⚠️
          </div>

          <h2 className="mt-5 text-2xl font-black text-white">
            Something went wrong
          </h2>

          <p className="mt-3 text-slate-500">
            {error}
          </p>

          <button
            onClick={() => window.location.reload()}
            className="mt-6 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-3 font-bold"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="products"
      className="relative min-h-screen overflow-hidden bg-[#0b0618] px-5 py-16"
    >
      {/* Background */}

      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 animate-pulse rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="pointer-events-none absolute right-[-100px] top-[20%] h-96 w-96 animate-pulse rounded-full bg-fuchsia-600/20 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-150px] left-[30%] h-96 w-96 animate-pulse rounded-full bg-indigo-600/20 blur-[130px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#a855f7 1px, transparent 1px), linear-gradient(90deg, #a855f7 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      <div
        id="collection"
        className="relative z-10 mx-auto max-w-7xl"
      >
        {/* HEADER */}

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex rounded-full border border-purple-400/20 bg-purple-500/10 px-5 py-2 backdrop-blur-xl">
            <span className="text-sm font-semibold tracking-[0.3em] text-purple-300">
              PREMIUM COLLECTION
            </span>
          </div>

          <h1 className="text-4xl font-black text-white md:text-6xl">
            Discover Your{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Style
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            Explore our latest fashion collection with premium quality,
            modern design and amazing prices.
          </p>

          {/* SEARCH RESULT */}

          {search && (
            <div className="mt-5">
              <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-xs text-purple-300">
                Searching for: "{search}"
              </span>
            </div>
          )}

          <div className="mx-auto mt-7 h-1 w-24 animate-pulse rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500" />
        </div>

        {/* NO PRODUCT */}

        {filteredProducts.length === 0 ? (
          <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
            <div className="text-6xl">
              🔎
            </div>

            <h2 className="mt-5 text-2xl font-black">
              No products found
            </h2>

            <p className="mt-2 text-slate-500">
              Try searching with another keyword.
            </p>
          </div>
        ) : (
          /* PRODUCTS */

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => {
              const isFavorite = favorites.some(
                (item) => item._id === product._id
              );

              return (
                <div
                  key={product._id}
                  className="group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.045] shadow-2xl shadow-purple-950/30 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-4 hover:border-purple-400/40 hover:shadow-purple-500/20"
                >
                  {/* Card Glow */}

                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl transition-all duration-500 group-hover:bg-purple-500/30" />

                  {/* NEW */}

                  {product.isNew && (
                    <div className="absolute left-4 top-4 z-20 animate-pulse rounded-full border border-purple-300/30 bg-purple-500/20 px-4 py-1.5 text-xs font-bold text-purple-200 backdrop-blur-xl">
                      ✦ NEW
                    </div>
                  )}

                  {/* FAVORITE */}

                  <button
                    onClick={() => toggleFavorite(product)}
                    className={`absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-xl transition duration-300 ${
                      isFavorite
                        ? "border-pink-400/30 bg-pink-500/20 text-pink-400"
                        : "border-white/10 bg-black/30 text-white"
                    }`}
                  >
                    {isFavorite ? "♥" : "♡"}
                  </button>

                  {/* IMAGE */}

                  <div className="relative h-72 overflow-hidden bg-[#120b24]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0618] via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4">
                      <span className="rounded-full border border-white/10 bg-black/40 px-4 py-1.5 text-xs font-medium capitalize text-purple-200 backdrop-blur-xl">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="relative p-5">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
                      {product.brand || "VELORA"}
                    </p>

                    <h2 className="line-clamp-1 text-xl font-bold text-white transition-colors duration-300 group-hover:text-purple-300">
                      {product.title}
                    </h2>

                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
                      {product.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wider text-slate-600">
                        Type
                      </span>

                      <span className="rounded-lg border border-white/5 bg-white/5 px-3 py-1 text-xs capitalize text-slate-300">
                        {product.type || "Fashion"}
                      </span>
                    </div>

                    {product.size && (
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-xs uppercase tracking-wider text-slate-600">
                          Size
                        </span>

                        <span className="text-xs font-medium text-slate-300">
                          {product.size?.join(" • ")}
                        </span>
                      </div>
                    )}

                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wider text-slate-600">
                        Stock
                      </span>

                      <span
                        className={`text-xs font-bold ${
                          Number(product.stock) > 20
                            ? "text-emerald-400"
                            : "text-orange-400"
                        }`}
                      >
                        {product.stock || "Available"}
                      </span>
                    </div>

                    <div className="my-5 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

                    {/* PRICE */}

                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-xs text-slate-600">
                          Current Price
                        </p>

                        <div className="mt-1 flex items-center gap-2">
                          <span className="text-2xl font-black text-white">
                            ${product.price}
                          </span>

                          {product.oldPrice && (
                            <span className="text-sm text-slate-600 line-through">
                              ${product.oldPrice}
                            </span>
                          )}
                        </div>
                      </div>

                      {product.discountedPrice && (
                        <div className="rounded-xl border border-fuchsia-400/10 bg-fuchsia-500/10 px-3 py-2 text-right">
                          <p className="text-[9px] uppercase tracking-wider text-fuchsia-400">
                            Discount
                          </p>

                          <p className="font-bold text-fuchsia-300">
                            ${product.discountedPrice}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* BUTTONS */}

                    <div className="mt-6 grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-bold text-slate-300 transition hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-white"
                      >
                        Details
                      </button>

                      <button
                        onClick={() => addToCart(product)}
                        className="rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 py-3 text-sm font-bold text-white shadow-lg shadow-purple-900/30 transition-all duration-300 hover:scale-[1.03] active:scale-95"
                      >
                        Add Cart 🛒
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Card;