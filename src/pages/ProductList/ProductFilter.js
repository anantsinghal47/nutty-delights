import { Box, Chip, IconButton, Typography } from '@mui/material'
import React from 'react'
import SortIcon from '@mui/icons-material/FilterListOutlined';
import './productFilter.css'
import PriceIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import ReviewIcon from '@mui/icons-material/StarBorderRounded';
import AvailableIcon from '@mui/icons-material/ChecklistRounded';
import FilterIcon from '@mui/icons-material/TuneRounded';


function ProductFilter() {

    const filters = [
        {
            name: 'Price',
            icon: <PriceIcon sx={{ fontSize: '14px' }} />

        }
        ,
        {
            name: 'Rating',
            icon: <ReviewIcon sx={{ fontSize: '14px' }} />
        },
        {
            name: "Availabilty",
            icon: <AvailableIcon sx={{ fontSize: '14px' }} />
        },
        {
            name: "Sort",
            icon: <SortIcon sx={{ fontSize: '14px' }} />
        }
    ]
    return (
        <div className='productFilter'>

            <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' }, }}  >
                <IconButton>
                    <FilterIcon />
                    <Typography sx={{ fontSize: '18px' }}>Filters</Typography>
                </IconButton>

            </Box>
            <Box className='filter-list' sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, }}  >
                {
                    filters.map((filter, index) => (
                        <Chip

                            icon={filter.icon}
                            key={index}
                            label={filter.name}
                            variant="outlined"
                            onClick={() => { }}
                        // onDelete={() => { }}
                        />
                    ))
                }
            </Box>
        </div>
    )
}

export default ProductFilter
