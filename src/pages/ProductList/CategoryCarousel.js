import { Box, Paper, Typography } from '@mui/material';
import Image from 'mui-image';
import React from 'react'
import Slider from 'react-slick';
import banner from '../../assets/images/banner.jpg'
import banner3 from '../../assets/images/banner3.jpg'
import banner4 from '../../assets/images/banner4.jpg'
import { NavLink } from 'react-router-dom';
import Category from '../Categories/Category';
import './categoriesCarousel.css'

function CategoryCarousel() {
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
    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        // // fade: true,
        // cssEase: 'linear',
        centerMode: true,
        centerPadding: '60px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div className='slider' style={{ marginInline: '30px' }}>
            <Slider   {...settings}>
                {categories?.map((category, index) => (
                    <Box key={index} sx={{ height: 'fit-content', background: 'white', margin: '0px', padding: '10px' }}>
                        {/* <Image style={{ height: '200px', borderRadius: '10px' }} duration={1000} easing='ease' src={banner3}></Image> */}
                        <Typography className='carousel-category-heading'>{category.name}</Typography>
                        <Paper sx={{ height: 'fit-content', width: 'fit-content', display: 'flex', alignItems: 'center', justifyContent: 'center' }} elevation={4}>
                            <NavLink to={`/products?productType=${category.name}`}>
                                <div >

                                    <Image height={120} showLoading style={{ borderRadius: '5px' }} duration={100} src={category.image_src} />
                                    {/* <Typography className='carousel-category-heading'>{category.name}</Typography> */}
                                </div>
                            </NavLink>
                            {/* <Category category={category} style={{ height: '150px', borderRadius: '15px' }} /> */}
                        </Paper>
                    </Box>
                ))}
            </Slider>
        </div >
    )
}

export default CategoryCarousel
