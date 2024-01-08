import Box from "@mui/system/Box";
import ListColumn from "./ListColumns/ListColumn";

const BoardContent = () => {
 
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#3498db",
        height: (theme) => theme.trello.boardContentHeight,
        width: "100ww",
        p:'10px 0'
      }}
    >
      <ListColumn/>
    </Box>
  );
};

export default BoardContent;
