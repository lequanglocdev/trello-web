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
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

const AppBar = () => {
  const [searchValue , setSearchValue] = useState('')
  return (
    <Box
      sx={{
        height: (theme) => theme.trello.appHeight,
        width: "100ww",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingX: 2,
        overflowX: "auto",
        // chỉnh background color
        bgcolor: (theme) => theme.palette.mode === "dark" ? "#2c3e56" : "#1565c0",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <AppsIcon
          sx={{
            color: "white",
          }}
        />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            sx={{ color: "white" }}
            fontSize="small"
          />
          <Typography
            variant="span"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Trello
          </Typography>
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <WorkSpace />
          <Recent />
          <Starred />
          <Templates />
          <Button
            variant="outlined"
            sx={{
              color: "white",
              border: "none",
              "&:hover": {
                border: "none",
              },
            }}
          >
            Create
          </Button>
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <TextField
          id="outlined-search"
          label="Search field"
          type="text"
          size="small"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ cursor: "pointer" }}>
                <SearchIcon sx={{ color: "white" }} />
              </InputAdornment>
            ),
            endAdornment:(
              <CloseIcon sx={{
                color: searchValue ? 'white' : 'transparent',
                cursor:'pointer'
              }}
                onClick={() => setSearchValue('')}
              />
            )
          }}
          sx={{
            minWidth: "120px",
            maxWidth: "170px",
            "& label": { color: "white" },
            "& input": { color: "white" },
            "& label.Mui-focused": { color: "white" },
            "& lable.Mui-focused": { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "white" },
              "&:hover fieldset": { borderColor: "white" },
              "&:Mui-forcused fieldset": { borderColor: "white" },
            },
          }}
        />
        <ModeSelect />

        <Tooltip title="Notificaton">
          <Badge color="secondary" variant="dot">
            <NotificationsNoneIcon sx={{ color: "white" }} />
          </Badge>
        </Tooltip>

        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: "pointer", color: "white" }} />
        </Tooltip>
        <Profile />
      </Box>
    </Box>
  );
};

export default AppBar;
