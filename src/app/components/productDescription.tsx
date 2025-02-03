'use client';

import { useState } from 'react';

const ProductDescription = ({description}: {description:string}) => {

    const [isExpended, setIsExpended] = useState(false)
    
    const togleDescription = () => {
        setIsExpended((prev) => !prev);
    }

    const truncatedDescription = description.length > 100 ? description.slice(0, 20) + '...' : description;


    return(
        <>
        <div>
            <p className="text-gray-500 text-[16px]">
                {isExpended ? description : truncatedDescription}
            </p>

            {description.length > 100 && (
                <button
                    onClick={togleDescription}
                    className="text-blue-500 text-[14px]"
                >
                    {isExpended ? 'Show Less' : 'Show More'}
                </button>
            )}
        </div>
        </>
    )
}

export default ProductDescription;