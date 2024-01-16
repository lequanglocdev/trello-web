import React from 'react'
import Box from "@mui/system/Box";
import Card from "./Card/Card";
import { SortableContext , verticalListSortingStrategy } from "@dnd-kit/sortable";

const ListCard = ({cards}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 
  return (
    <SortableContext items={cards?.map(c => c._id)}  strategy={verticalListSortingStrategy}>
          <Box
      sx={{
        p: '0 5px',
        m: '0 5px',
        display: "flex",
        flexDirection: "column",
        gap: 1,
        overflowX: "hidden",
        overflowY: "auto",
        maxHeight: (theme) => `calc(
        ${theme.trello.boardContentHeight} - 
        ${theme.spacing(5)} - 
        ${theme.trello.columnHeaderHeight} -
        ${theme.trello.columnFooterHeight} 
        )`,
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#ced0da",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#bfc2cf",
        },
      }}
    >
     {cards?.map(card => <Card key={card._id} card={card}/>)}
     

    </Box>
    </SortableContext>
  
  )
}

export default ListCard