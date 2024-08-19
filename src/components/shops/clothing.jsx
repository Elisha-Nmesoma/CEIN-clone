import React, { useEffect, useState } from 'react'
import { styles } from '../../style';
import { favouriteIcon, addCart } from '../../assets';
import { useNavigate } from 'react-router-dom';

export default function Clothing() {
    const [clothingProducts, setClothingProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [failedImages, setFailedImages] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(res => res.json())
            .then(data => {
                const clothingItems = data.filter(product => product.category.id === 1);
                console.log(clothingItems)
                setClothingProducts(clothingItems)
                setLoading(false)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setError("Failed to fetch products. Please try again later.");
                setLoading(false);
            })
    }, [])


    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className='flex-1 '>
            <h1>clothings</h1>
            <section className='flex items-center justify-center z-0 md:mt-10'>
                <div className={`${styles.margin}  gap-x-3 gap-y-8 grid grid-cols-2 md:grid-cols-4 w-full`}>
                    {clothingProducts.map(product => (
                        <div key={product.id}>

                            <div className={`${styles.imgConatner}`} onClick={() => navigate(`/product/${product.id}`, { state: { product } })}>
                                {product.images && product.images.length > 0 && !failedImages[product.id] && (
                                    <div onClick={() => handleImageClick(product.id)}>
                                        <img src={product.images[0]} alt={product.title} />

                                        <div className=' w-3.5 h-3 absolute bottom-2 right-2'>
                                            <img src={addCart} />
                                        </div>
                                        <div className=' w-3 h-3 absolute top-2 right-2'>
                                            <img src={favouriteIcon} />
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className='text-200'>
                                <p>{product.name}</p>
                                <p>{product.title}</p>
                                <p>${product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}
