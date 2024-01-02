
import { useColorScheme} from '@mui/material/styles';

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import Container from '@mui/material/Container';
import Box from '@mui/system/Box';
import theme from './theme';

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

function App() {
  return (
    <Container disableGutters maxWidth={false} sx={{height:'100vh'}}>
      <Box  sx={{
              backgroundColor:'primary.light',
              height:(theme) => theme.trello.appHeight,
              width:'100ww',
              display:'flex',
              alignItems:'center'
          }}>
        <ModelSelect/>
      </Box >

      <Box 
          sx={{
            backgroundColor:'primary.dark',
            height:(theme) => theme.trello.boardHeight,
            width:'100ww',
            display:'flex',
            alignItems:'center'
        }}
      >
        ModeBar
      </Box>
      <Box
          sx={{
            backgroundColor:'primary.main',
            height:(theme) => `calc(100vh - ${theme.trello.appHeight} - ${theme.trello.boardHeight})`,
            width:'100ww',
            display:'flex',
            alignItems:'center'
        }}
      >
        Content
      </Box>
    </Container>
  );
}

export default App;
