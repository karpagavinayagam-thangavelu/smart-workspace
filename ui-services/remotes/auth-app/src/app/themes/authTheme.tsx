import { createTheme } from '@mui/material/styles';

export const authTheme = createTheme({
  palette: {
    mode: 'dark',
    text: {
        primary: "#fff",
        secondary: "#fff"
    },
    primary: {
        main: "#fff",
      contrastText: "#fff"
    },
    secondary: {
      main: '#CC5500',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#ccc',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          '&:active': {
            boxShadow: 'none',
          },
          /* Glassy Appearance */
          display: 'inline-block',
          position: 'relative',
          backgroundColor: '#AAA',
          backgroundImage: `linear-gradient(
            hsla(0, 0%, 100%, 0.6), hsla(0, 0%, 100%, 0) 50%,
            hsla(0, 0%, 0%, 0.3) 50%, hsla(0, 0%, 100%, 0.2)
            )`,
          // font-size: 22px;
          // font-family: sans-serif;
          // font-weight: bold;
          // color: white;
         // padding: '20px 40px',
          textShadow: `0 0 15px hsla(0, 0%, 100%, 1), /* bloom */
                 0 2px 4px hsla(0, 0%, 0%, 0.7); /* drop shadow */`,
          border: 'none',
          // borderRadius: '50px',
         // margin: '10px',
          boxShadow: `
            inset 0 -5px 20px hsla(0, 0%, 0%, 0.4), /* top light */
            inset 0 5px 20px hsla(0, 0%, 100%, 0.4), /* bottom shadow */
            /* multiple light sources yall */
            0px 3px 1px -2px rgba(0,0,0,0.2), 
            0px 2px 2px 0px rgba(0,0,0,0.14), 
            0px 1px 5px 0px rgba(0,0,0,0.12)`,
          transition: 'transform 0.1s, box-shadow 0.1s',

          "&:hover": {
            transform: 'scale(1.05)',
            boxShadow: `
              inset 0 -5px 20px hsla(0, 0%, 0%, 0.4), /* top light */
              inset 0 5px 20px hsla(0, 0%, 100%, 0.4), /* bottom shadow */
              /* multiple light sources yall */
              0px 3px 1px -2px rgba(0,0,0,0.2), 
                0px 2px 2px 0px rgba(0,0,0,0.14), 
                0px 1px 5px 0px rgba(0,0,0,0.12)`
          },
          "&:before" : {
            content: '""',
            display: 'block',
            position: 'absolute',
            left: 10,
            right: 10,
            top: 3,
            height: '18px',
            borderRadius: '15px',
            background: `linear-gradient(
              hsla(0, 0%, 100%, 0.5), hsla(0, 0%, 100%, 0) )`
          }
        },
        containedSecondary: {
            backgroundColor: "orange"
        }
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          display: 'flex',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '50px !important',
          color: '#fff',
          borderColor: '#fff',
        },
      },
    },
  },
});
