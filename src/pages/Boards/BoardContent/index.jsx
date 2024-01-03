
import Box from "@mui/system/Box";
const BoardContent = () => {
  return (
    <Box
    sx={{
      backgroundColor: "primary.main",
      height: (theme) =>
        `calc(100vh - ${theme.trello.appHeight} - ${theme.trello.boardHeight})`,
      width: "100ww",
      display: "flex",
      alignItems: "center",
    }}
  >
    Content
  </Box>
  )
}

export default BoardContent