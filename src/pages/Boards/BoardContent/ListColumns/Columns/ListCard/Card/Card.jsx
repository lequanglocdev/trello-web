import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Tooltip } from "@mui/material";
import { Card as MuiCard } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CommentIcon from "@mui/icons-material/Comment";
import AttachmentIcon from "@mui/icons-material/Attachment";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
const Card = ({ card }) => {
 
  const { attributes, listeners, setNodeRef, transform, transition ,touchAction ,isDragging} =
    useSortable({
      id: card._id,
      data: { ...card },
    });

  const dndkitCardStyle = {
   
    // Nếu như chổ CSS.Transform sẽ bị lỗi kiểu stretch 
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
    border: isDragging  ? 0.5 : undefined
  };

  const showCardAction = () => {
    return (
      !!card?.memberIds?.length ||
      !!card?.comments?.length ||
      !!card?.attachments?.length
    );
  };
  
  return (
    <MuiCard
    ref={setNodeRef}
      style={dndkitCardStyle}
      {...attributes}
      {...listeners}
      sx={{
        cursor: "pointer",
        boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
        overflow: "unset",
      }}
    >
      {card?.cover && <CardMedia sx={{ height: 140 }} image={card?.cover} />}

      <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
        <Typography>{card?.title}</Typography>
      </CardContent>
      {showCardAction() && (
        <CardActions sx={{ padding: "0px 4px" }}>
          {!!card?.memberIds?.length && (
            <Button size="small" startIcon={<PeopleAltIcon />}>
              {card?.memberIds?.length}
            </Button>
          )}

          {!!card?.comments?.length && (
            <Button size="small" startIcon={<CommentIcon />}>
              {card?.comments?.length}
            </Button>
          )}

          {!!card?.attachments?.length && (
            <Button size="small" startIcon={<AttachmentIcon />}>
              {card?.attachments?.length}
            </Button>
          )}
        </CardActions>
      )}
    </MuiCard>
  );
};

export default Card;
