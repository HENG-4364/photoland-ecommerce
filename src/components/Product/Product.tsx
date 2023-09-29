import Link from 'next/link'
import React from 'react'
type IProductCardProps = {
    price: string;
    product_name: string;
    image: string;
    description: string;
    id?: number;
};
const Product = ({
    price,
    product_name,
    image,
    description,
    id,
}: IProductCardProps) => {
    return (
        <>
            <Link href={`/product/1`}>
                <div className='grad w-full h-[362px] rounded-[8px] overflow-hidden relative group'>
                    {/* badge */}
                    <div className='absolute bg-accent text-primary text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10'>New</div>
                    {/* badge */}
                    <div>
                        <div className='w-full h-[200px] flex items-center justify-center relative '>
                            <img className='w-[160px] h-[160px] group-hover:scale-90 transition-all' src={image} alt="" />
                        </div>
                        <div className='px-6 pb-8 flex flex-col'>
                            <div className='text-sm text-accent capitalize mb-2'>{product_name}</div>
                            <div className='text-[15px] mb-4 lg:mb-9'>{description}</div>
                            <div className='text-lg text-accent'>$ {price}</div>
                        </div>
                    </div>
                </div>
            </Link>

        </>


    )
}

export default Product
