import ProductCard from "@/components/Products/ProductCard";

const AllProducts = async () => {
    const res = await fetch("http://localhost:5000/products", {
        cache: "no-store"
    });
    const products = await res.json();

    return (
        <div className="grid grid-cols-3 gap-8 w-[90%] mx-auto mt-10">
            {
                products?.map((product) => <ProductCard product={product} key={product.id} />)
            }
        </div>
    );
};

export default AllProducts;