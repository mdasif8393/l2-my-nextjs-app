import ProductCard from "@/components/Products/ProductCard";
import Link from "next/link";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    next: {
      revalidate: 5,
    }
  });
  const products = await res.json();


  return (
    <div>
      <div className="grid grid-cols-3 gap-8 w-[90%] mx-auto mt-10">
        {
          products?.slice(0, 3).map((product) => <ProductCard product={product} key={product.id} />)
        }
      </div>
      <Link
        href="/products"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3"
      >
        Show All Products
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    </div>

  );
};

export default HomePage;