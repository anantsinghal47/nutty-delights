import { createTheme } from '@mui/material/styles';
const font = "'Quicksand', sans-serif";

const theme = createTheme({
    palette: {
        // primary: {
        //     main: "#fef9f8"


        // },
        // secondary: {
        //     main: '#ef9273',
        // },






    },

    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    minHeight: 64,
                    backgroundColor: 'white',
                    color: 'black'
                }
            }
        }
    },

    typography: {
        fontFamily: "Quicksand",
        button: {
            textTransform: "none"
        },

    }

});

export default theme;