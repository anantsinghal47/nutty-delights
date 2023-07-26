import { Toolbar, Typography } from '@mui/material'
import React from 'react'
import './categories.css'
import Category from './Category'




const Categories = () => {

    const categories = [
        {
            id: '1',
            name: 'Cashews',
            image_src: 'https://img.freepik.com/free-photo/raw-cashews-nuts-bag-dark-background_1150-45358.jpg?w=1060&t=st=1690372663~exp=1690373263~hmac=23965497b50df0c498b9323cf3d698011a410775e7e067760ae13acd9e607800'
        },
        {
            id: '2',
            name: 'Almonds',
            image_src: 'https://img.freepik.com/free-photo/almonds-bowl-dark-background_1150-45095.jpg?size=626&ext=jpg&ga=GA1.1.1043680317.1690372652&semt=sph'
        },
        {
            id: '3',
            name: 'Pistachios',
            image_src: 'https://cdn.cdnparenting.com/articles/2017/12/522338797-H.webp'
        },
        {
            id: '4',
            name: 'Raisins',
            image_src: 'https://img.freepik.com/free-photo/top-view-dried-grape-raisins-inside-plate-dark-grey-surface_140725-90460.jpg?size=626&ext=jpg&ga=GA1.1.1043680317.1690372652&semt=sph'
        },

        {
            id: '5',
            name: 'Walnuts',
            image_src: 'https://img.freepik.com/free-photo/wooden-bowl-full-healthy-walnuts-hard-shells_114579-43948.jpg?size=626&ext=jpg&ga=GA1.1.1043680317.1690372652&semt=sph'
        },
        {
            id: '6',
            name: 'Figs',
            image_src: 'https://img.freepik.com/free-photo/various-dried-fruits-bowl-trivet-marble-surface_114579-84050.jpg?size=626&ext=jpg&ga=GA1.1.1043680317.1690372652&semt=ais'
        },

    ]

    const heading = 'Shop our top catgories'
    return (

        <div className='categories'>
            <Typography className='heading'>
                {heading}
            </Typography>
            <div className='category-cards'>
                {
                    categories.map((category, index) => {
                        console.log("category", category)
                        return <Category key={index} category={category} />
                    })
                }
            </div>



        </div>
    )
}

export default Categories
