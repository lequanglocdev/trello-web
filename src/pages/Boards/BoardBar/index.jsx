import Box from "@mui/system/Box";
import Chip from "@mui/material/Chip";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
const menuStyle = {
  color: "primary.main",
  bgcolor: "white",
  border: "none",
  paddingX: "5px",
  "& .MuiSvgIcon-root": {
    color: "primary.main",
  },
  "&:hover": {
    bgcolor: "primary.color",
  },
};

const BoardBar = () => {
  return (
    <Box
      sx={{
        height: (theme) => theme.trello.boardHeight,
        width: "100ww",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingX: 2,
        overflowX: "auto",
        borderTop: "1px solid #ccc",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        <Chip
          icon={<DashboardIcon />}
          label="lequangloc"
          clickable
          sx={menuStyle}
        />
        <Chip
          icon={<VpnLockIcon />}
          label="Public/Pravite WorkSpace"
          clickable
          sx={menuStyle}
        />
        <Chip
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
          sx={menuStyle}
        />
        <Chip icon={<BoltIcon />} label="Automation" clickable sx={menuStyle} />
        <Chip
          icon={<FilterListIcon />}
          label="Filters"
          clickable
          sx={menuStyle}
        />
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
      <Button variant="outlined" sx={{marginX:1}} startIcon={<PersonAddIcon/>}>Invite</Button>
        <AvatarGroup total={24}
          sx={{
            '& .MuiAvatar-root':{
              width:30,
              height:30
            }
          }}
        >
         <Tooltip>
            <Avatar
              alt="Remy Sharp"
              src="https://avatars.githubusercontent.com/u/107296302?v=4"
            />
          </Tooltip>
          <Tooltip>
            <Avatar
              alt="Remy Sharp"
              src=" https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
            />
          </Tooltip>
         
          <Tooltip>
            <Avatar
              alt="Remy Sharp"
              src="https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png"
            />
          </Tooltip>


          <Tooltip>
            <Avatar
              alt="Remy Sharp"
              src="https://www.shareicon.net/data/512x512/2016/05/24/769983_man_512x512.png"
            />
          </Tooltip>


          <Tooltip>
            <Avatar
              alt="Remy Sharp"
              src="https://www.shareicon.net/download/2016/06/25/786534_people_512x512.png"
            />
          </Tooltip>
         
        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default BoardBar;
