import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ width, marginRight = "3vh", margin = 0 }) {
    return (
        <Paper
            component="form"
            elevation={0}
            sx={{
                // display: { xs: 'none', md: 'flex', sm: 'flex' },
                p: '0px 4px',
                height: '40px',
                width: width,
                display: 'flex',
                alignItems: 'center',
                borderRadius: "18px",
                backgroundColor: "#f0f0f0",
                margin: margin,
                marginRight: marginRight
            }}
        >

            <InputBase
                sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' }, ml: 1, flex: 1, fontWeight: 'bold' }}
                placeholder="Search Dry Fruits"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            {/*     <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}

        </Paper>
    );
}