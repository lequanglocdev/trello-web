import React from 'react'
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import { Button, Tooltip } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem"
import ListItemIcon from "@mui/material/ListItemIcon";
import AddCardIcon from "@mui/icons-material/AddCard";
import ListItemText from "@mui/material/ListItemText";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import Divider from "@mui/material/Divider";
import Cloud from "@mui/icons-material/Cloud";
import DeleteIcon from "@mui/icons-material/Delete";
import ListCard from './ListCard/ListCard';
import DragHandleIcon from "@mui/icons-material/DragHandle";
const Column = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
    sx={{
      minWidth: "280px",
      maxWidth: "280px",
      bgcolor: (theme) =>
        theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
      ml: 2,
      borderRadius: "6px",
      height: "fit-content",
      maxHeight: (theme) =>
        `calc (${theme.trello.boardContentHeight} - ${theme.spacing(5)})`,
    }}
  >
    {/* Box header */}
    <Box
      sx={{
        height: (theme) => {theme.trello.columnHeaderHeight},
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        Column Title
      </Typography>
      <Box>
        <KeyboardArrowDownIcon
          sx={{ color: "text.primary", cursor: "pointer" }}
          aria-controls={open ? "basic-menu-column" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        />
        <Menu
          id="basic-menu-wordSpace"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button-wordSpace",
          }}
        >
          <MenuItem>
            <ListItemIcon>
              <AddCardIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Add new card</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ContentCut fontSize="small" />
            </ListItemIcon>
            <ListItemText>Cut</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ContentCopyIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Copy</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ContentPasteIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Paste</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <DeleteIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Remove this column</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Cloud fontSize="small" />
            </ListItemIcon>
            <ListItemText>Archive this column</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
    </Box>

    {/* box content */}
      <ListCard/>

    {/* box footer */}
    <Box
      sx={{
        height:(theme) =>{theme.trello.columnFooterHeight},
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
      }}
    >
      <Button startIcon={<AddCardIcon />}>Add new cart</Button>
      <Tooltip title="Drag to move">
        <DragHandleIcon sx={{ cursor: "pointer" }} />
      </Tooltip>
    </Box>
  </Box>

  )
}

export default Column