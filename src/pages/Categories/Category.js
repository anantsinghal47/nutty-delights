import { Paper, Typography } from '@mui/material'
import Image from 'mui-image'
import React from 'react'

const Category = ({ category }) => {
    console.log(category)
    return (
        <div className='category'>
            <Typography className='category-heading'>{category.name}</Typography>
            <Image style={{ borderRadius: '15px' }} duration={100} src={category.image_src} />
        </div>
    )
}

export default Category
