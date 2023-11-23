import SingleProductPage from '@/app/ui/components/singleProductPage/SingleProductPage';

const fetchData = async (params: { id: string }) => {
  try {
    const productsFetch = await fetch(`http://localhost:3001/products/${params?.id}`, {
      cache: 'no-store',
    });

    return await productsFetch.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export async function generateMetadata({ params }: { params: { id: string } }) {
  const response: any = await fetch(`${process.env.API_URL}/products/${params?.id}`, {
    cache: 'no-store',
  });

  const product = await response.json();

  if (!product) {
    return {
      title: 'Page Not Found',
    };
  }

  return {
    title: product.name,
  };
}

const SingleProduct = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const product = await fetchData(params);

  return <>{<SingleProductPage product={product} />}</>;
};
export default SingleProduct;
