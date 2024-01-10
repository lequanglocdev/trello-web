import Box from "@mui/system/Box";
import Column from "./Columns/Column";
import { Button } from "@mui/material";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { SortableContext , horizontalListSortingStrategy } from "@dnd-kit/sortable";

const ListColumn = ({ columns }) => {
  /*
    Thằng SortableContext yêu cầu items là một mảng dạng ['id-1' , 'id-2']
     chứ không phải là [{id: 'id-1'},{id:'id-2'}]

     Nếu không đúng thì vẫn kéo thả được nhưng không có animation
  */
  return (
    <SortableContext items={columns?.map(c => c._id)}  strategy={horizontalListSortingStrategy}>
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
        {columns?.map((column, index) => {
          return <Column key={column._id} column={column} />;
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
    </SortableContext>
  );
};

export default ListColumn;
