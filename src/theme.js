import { createTheme } from "@mui/material/styles";
import { cyan, deepOrange, red ,orange} from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
// Create a theme instance.

const APP_BAR_HEIGHT = '58px'
const BOARD_BAR_HEIGHT = '60px'
const COLUMN_HEADER_HEIGHT = "50px";
const COLUMN_FOOTER_HEIGHT = "56px";
const BOARD_CONTENR_HEIGHT =  `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`
const theme = extendTheme({
    trello:{
      appHeight:APP_BAR_HEIGHT,
      boardHeight:BOARD_BAR_HEIGHT,
      boardContentHeight:BOARD_CONTENR_HEIGHT,
      columnHeaderHeight:COLUMN_HEADER_HEIGHT,
      columnFooterHeight:COLUMN_FOOTER_HEIGHT
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
            borderWidth:'0.5px',
            '&:hover':{borderWidth:'1px'}
          },
        },
      },
      MuiOutlinedInput:{
        styleOverrides:{
          root:({theme}) =>({
            // color:theme.palette.primary.main,
            fontSize:'0.875rem',
            // '.MuiOutlinedInput-nochedOutline':{
            //   borderColor: theme.palette.primary.light
            // },
            // '&:hover':{
            //   '.MuiOutlinedInput-nochedOutline':{
            //     borderColor:theme.palette.primary.main
            //   }
            // },
            '& fieldset':{borderWidth:'0.5px !important'},
            '&:hover fieldset':{borderWidth:'1px !important'},
            '&.Mui-focused fieldset':{borderWidth:'1px !important'}
          })
        }
      },
      MuiInputLabel:{
        styleOverrides:{
          root:({theme}) => ({
            
            fontSize:'0.875rem',

          })
        }
      },
      MuiTypography:{
        styleOverrides:{
          root:({theme}) => ({
            
          '&.MuiTypogaraphy-body1':{  fontSize:'0.875rem'}

          })
        }
      },
     
    },
  })

export default theme;