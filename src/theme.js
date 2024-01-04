import { createTheme } from "@mui/material/styles";
import { cyan, deepOrange, red ,orange} from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
// Create a theme instance.
const theme = extendTheme({
    trello:{
      appHeight:'58px',
      boardHeight:'60px'
    },
    colorSchemes: {
      // light: {
      //   palette: {
      //     primary: {
      //       main: '#ff5252',
      //       secondary:deepOrange
      //     },
         
      //   },
      // },
      // dark: {
      //   palette: {
      //     primary: {
      //       main:'#ff5252',
      //       secondary:orange
      //     },
         
      //   },
      // },
      
    },
    components: {
      // Name of the component
      MuiCssBaseline:{
        styleOverrides:{
          body:{
            '*::-webkit-scrollbar':{
              width:'4px',
              height:'4px'
            },
            '*::-webkit-scrollbar-thumb':{
              backgroundColor:'#bdc3c7',
              borderRadius:'4px'
            },
            '*::-webkit-scrollbar-thumb:hover':{
              backgroundColor:'#3498db'
            },
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            textTransform:'none',
      
          },
        },
      },
      MuiOutlinedInput:{
        styleOverrides:{
          root:({theme}) =>({
            color:theme.palette.primary.main,
            fontSize:'0.875rem',
            '.MuiOutlinedInput-nochedOutline':{
              borderColor: theme.palette.primary.light
            },
            '&:hover':{
              '.MuiOutlinedInput-nochedOutline':{
                borderColor:theme.palette.primary.main
              }
            },
            '& filedset':{
              borderWidth:'1px !important'
            }
          })
        }
      },
      MuiInputLabel:{
        styleOverrides:{
          root:({theme}) => ({
            color: theme.palette.primary.main,
            fontSize:'0.875rem',

          })
        }
      },
     
    },
  })

export default theme;