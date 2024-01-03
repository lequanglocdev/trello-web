
import Box from "@mui/system/Box";
const BoardBar = () => {
  return (
    <Box
    sx={{
      backgroundColor: "primary.dark",
      height: (theme) => theme.trello.boardHeight,
      width: "100ww",
      display: "flex",
      alignItems: "center",
    }}
  >
    ModeBar
  </Box>
  )
}

export default BoardBar