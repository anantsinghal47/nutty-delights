import { Paper, Typography } from '@mui/material'
import Image from 'mui-image'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Category = ({ category, style = { borderRadius: '15px' } }) => {
    console.log(category)
    return (
        <NavLink to={`/products?productType=${category.name}`}>
            <div className='category'>
                <Typography className='category-heading'>{category.name}</Typography>
                <Image showLoading style={style} duration={100} src={category.image_src} />
            </div>
        </NavLink>


    )
}

export default Category
