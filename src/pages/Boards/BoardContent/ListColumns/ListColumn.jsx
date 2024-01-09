import Box from "@mui/system/Box";
import Column from "./Columns/Column";
import { Button } from "@mui/material";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
const ListColumn = ({ columns }) => {
  return (
    <Box
      sx={{
        bgcolor: "inherit",
        with: "100%",
        height: "100%",
        display: "flex",
        overflowX: "auto",
        overflowY: "hidden",
        "&::-webkit-scrollbar-track": { m: 2 },
      }}
    >
      {columns?.map((column,index) => {
        return( <Column key={column._id} column={column} />)
      })}

      <Box
        sx={{
          minWidth: "200px",
          maxWidth: "200px",
          height: "fit-content",
          mx: 2,
          borderRadius: "8px",
          bgcolor: "#ffffff3d",
        }}
      >
        <Button
          startIcon={<NoteAddIcon />}
          sx={{
            pl: 2.5,
            py: 1,
            color: "white",
            width: "100%",
            justifyContent: "flex-start",
          }}
        >
          Add new column
        </Button>
      </Box>
    </Box>
  );
};

export default ListColumn;
