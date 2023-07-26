import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Box } from '@mui/material';
import Image from 'mui-image';
import banner1 from '../../../assets/images/banner1.png'
import banner from '../../../assets/images/banner.jpg'
import banner3 from '../../../assets/images/banner3.jpg'
import banner4 from '../../../assets/images/banner4.jpg'

const Carousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        cssEase: 'linear'
    };
    return (
        <div className='slider' style={{ marginInline: '30px' }}>
            <Slider  {...settings}>
                <Box sx={{ height: '30vw', background: 'white' }}>
                    <Image style={{ borderRadius: '10px' }} duration={1000} easing='ease' fit='cover' src={banner3}></Image>
                </Box>
                <Box sx={{ height: '30vw', background: 'white' }}>
                    <Image style={{ borderRadius: '10px' }} duration={1000} easing='ease' fit='cover' src={banner}></Image>
                </Box>
                <Box sx={{ height: '30vw', background: 'white' }}>
                    <Image style={{ borderRadius: '10px' }} duration={1000} easing='ease' fit='cover' src={banner4}></Image>
                </Box>

            </Slider>
        </div>
    )
}

export default Carousel
