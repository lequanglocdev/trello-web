import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ThreeDRotation from "@mui/icons-material/ThreeDRotation";
import HomeIcon from "@mui/icons-material/Home"
import { pink } from '@mui/material/colors';

import { useColorScheme} from '@mui/material/styles';

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";

function ModelSelect() {
  const { mode, setMode } = useColorScheme();
  const handleChange = (event) => {
    // setAge(event.target.value);
    const select = event.target.value;
    setMode(select);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="lable-light-dark-mode">Mode</InputLabel>
      <Select
        labelId="lable-light-dark-mode"
        id="select-light-dark-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <LightModeIcon /> Light
          </div>
        </MenuItem>
        <MenuItem value="dark">
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <DarkModeIcon /> Dark
          </div>
        </MenuItem>
        <MenuItem value="system">
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <SettingsBrightnessIcon /> System
          </div>
        </MenuItem>
      </Select>
    </FormControl>
  );
}


function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}

function App() {
  return (
    <>
    <ModelSelect/>
      <div>Quang loc dev</div>
      <Button variant="contained">Hello world</Button>
      <AccessAlarmIcon />
      <ThreeDRotation />
      <br />
      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[500] }} />
    </>
  );
}

export default App;
