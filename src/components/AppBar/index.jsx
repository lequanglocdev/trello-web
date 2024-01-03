import Box from "@mui/system/Box";
import ModeSelect from "../ModeSelect/index"

const AppBar = () => {
  return (
    <Box
    sx={{
      backgroundColor: "primary.light",
      height: (theme) => theme.trello.appHeight,
      width: "100ww",
      display: "flex",
      alignItems: "center",
    }}
  >
   <ModeSelect/>
  </Box>
  )
}

export default AppBar