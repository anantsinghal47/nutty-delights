import React, { useEffect, useState } from 'react'
import CategoryCarousel from './CategoryCarousel'
import ProductFilter from './ProductFilter'
import { Box, Paper, Typography } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import './productlist.css'
import Image from 'mui-image'




function ProductList() {

    const [searchParams, setSearchParams] = useSearchParams();


    const [products, setProducts] = useState(
        [
            {
                id: '45788',
                name: 'Vinod Premium Cashew',
                price: 499,
                discount: '12%',
                rating: 5,
                desciption: 'Vinod Premium Cashew, 320',
                kcal: '450 kcal',
                quantity: 0,
                image_url: 'https://m.media-amazon.com/images/I/71QgHQ8RWkL.jpg'

            },
            {
                id: '45788',
                name: 'Vinod Premium Cashew',
                price: 499,
                discount: '12%',
                rating: 5,
                desciption: 'Vinod Premium Cashew, 320',
                kcal: '450 kcal',
                quantity: 0,
                image_url: 'https://m.media-amazon.com/images/I/71IyL8UvaJL.jpg'

            },
            {
                id: '45788',
                name: 'Vinod Premium Cashew',
                price: 499,
                discount: '12%',
                rating: 5,
                desciption: 'Vinod Premium Cashew, 320',
                kcal: '450 kcal',
                quantity: 0,
                image_url: 'https://www.sethjidryfruits.com/wp-content/uploads/2021/08/WhatsApp-Image-2021-08-26-at-3.33.11-PM.jpeg'

            },
            {
                id: '45788',
                name: 'Vinod Premium Cashew',
                price: 499,
                discount: '12%',
                rating: 5,
                desciption: 'Vinod Premium Cashew, 320',
                kcal: '450 kcal',
                quantity: 0,
                image_url: 'https://www.anandsweets.in/cdn/shop/products/CashewnutSaltedF.png?crop=center&height=2048&v=1661337320&width=2048'

            },
            {
                id: '45788',
                name: 'Vinod Premium Cashew',
                price: 499,
                discount: '12%',
                rating: 5,
                desciption: 'Vinod Premium Cashew, 320',
                kcal: '450 kcal',
                quantity: 0,
                image_url: 'https://www.anandsweets.in/cdn/shop/products/CashewnutSaltedF.png?crop=center&height=2048&v=1661337320&width=2048'

            },
            {
                id: '45788',
                name: 'Vinod Premium Cashew',
                price: 499,
                discount: '12%',
                rating: 5,
                desciption: 'Vinod Premium Cashew, 320',
                kcal: '450 kcal',
                quantity: 0,
                image_url: 'https://5.imimg.com/data5/HP/DM/JZ/SELLER-51826523/ramee-cashew-w240-box.JPG'

            },


        ]
    )

    return (
        <div >

            <Box className='product-list-box'>
                <ProductFilter />
            </Box>

            <div className='middle-box'>
                <Typography className='product-list-box-heading'>{`${searchParams.get('productType')} for you !`}</Typography>
            </div>

            <div className='product-list'>
                {
                    products.map((product, index) => (
                        <Paper key={index}>
                            <Image duration={100} showLoading height={300} src={product.image_url}></Image>
                            <Box>
                                <Typography>{product.name}</Typography>
                                <Typography>{`₹ ${product.price}`}</Typography>

                            </Box>
                        </Paper>
                    ))
                }
            </div>
            <CategoryCarousel />

        </div>
    )
}

export default ProductList
