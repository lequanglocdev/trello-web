
import Box from "@mui/system/Box";
const BoardContent = () => {
  return (
    <Box
    sx={{
      bgcolor: (theme) => theme.palette.mode === "dark" ? "#34495e" : "#3498db",
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