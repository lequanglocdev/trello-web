import React from 'react'
import Typography from "@mui/material/Typography";
import { Button, Tooltip } from "@mui/material";
import {Card as MuiCard} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CommentIcon from "@mui/icons-material/Comment";
import AttachmentIcon from "@mui/icons-material/Attachment";
const Card = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <MuiCard
        sx={{
          cursor: "pointer",
          boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
          overflow: "unset",
        }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.ytimg.com/vi/0SJE9dYdpps/maxresdefault.jpg"
          title="green iguana"
        />
        <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
          <Typography>Khóa javascript cơ bản</Typography>
        </CardContent>
        <CardActions sx={{ padding: "0px 4px" }}>
          <Button size="small" startIcon={<PeopleAltIcon />}>
            20
          </Button>
          <Button size="small" startIcon={<CommentIcon />}>
            20
          </Button>
          <Button size="small" startIcon={<AttachmentIcon />}>
            20
          </Button>
        </CardActions>
      </MuiCard>
  )
}

export default Card