import Box from "@mui/system/Box";
import ModeSelect from "~/components/ModeSelect";
import AppsIcon from "@mui/icons-material/Apps";
import { ReactComponent as TrelloIcon } from "~/assets/trelloLogo.svg";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import WorkSpace from "./Menus/WorkSpace";
import Recent from "./Menus/Recent";
import Starred from "./Menus/Starred";
import Templates from "./Menus/Templates";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Badge from "@mui/material/Badge";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Tooltip from "@mui/material/Tooltip";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Profile from "./Menus/Profile";
const AppBar = () => {
  return (
    <Box
      sx={{
        height: (theme) => theme.trello.appHeight,
        width: "100ww",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingX:2,
        overflowX:'auto'
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <AppsIcon
          sx={{
            color: "primary.main",
          }}
        />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            sx={{ color: "primary.main" }}
            fontSize="small"
          />
          <Typography
            variant="span"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "primary.main",
            }}
          >
            Trello
          </Typography>
        </Box>

        <Box sx={{display:{xs:'none',md:'flex'},gap:1}}>
          <WorkSpace />
          <Recent />
          <Starred />
          <Templates />
          <Button variant="outlined">Create</Button>
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          size="small"
          sx={{minWidth:'120px'}}
        />
        <ModeSelect />

        <Tooltip title="Notificaton">
          <Badge color="secondary" variant="dot">
            <NotificationsNoneIcon sx={{ color: "primary.main" }} />
          </Badge>
        </Tooltip>

        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: "pointer", color: "primary.main" }} />
        </Tooltip>
        <Profile />
      </Box>
    </Box>
  );
};

export default AppBar;
