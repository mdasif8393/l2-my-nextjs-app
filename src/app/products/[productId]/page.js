
const DynamicProductPage = async ({ params, searchParams }) => {
    const productId = await params.productId;
    console.log(await searchParams);

    return (
        <div>
            <h1 className="text-2xl">This is dynamic product page: {productId}</h1>
        </div>
    );
};

export default DynamicProductPage;