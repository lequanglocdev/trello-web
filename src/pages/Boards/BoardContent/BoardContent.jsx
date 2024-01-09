import Box from "@mui/system/Box";
import ListColumn from "./ListColumns/ListColumn";
import {mapOrder} from "~/utils/sort"
const BoardContent = ({board}) => {
 const orderedColumn = mapOrder(board?.columns , board?.columnOrderIds , '_id')
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
      <ListColumn columns={orderedColumn}/>
    </Box>
  );
};

export default BoardContent;
